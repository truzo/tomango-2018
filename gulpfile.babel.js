import gulp from "gulp";
import {spawn} from "child_process";
import hugoBin from "hugo-bin";
import gutil from "gulp-util";
import postcss from "gulp-postcss";
import cssImport from "postcss-import";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";
import BrowserSync from "browser-sync";
import watch from "gulp-watch";
import webpack from "webpack";
import webpackConfig from "./webpack.conf";

import sass from 'gulp-sass';
import maps from  'gulp-sourcemaps';
import notify from  'gulp-notify';
import autoprefixer from 'autoprefixer';

const browserSync = BrowserSync.create();

// Hugo arguments
const hugoArgsDefault = ["-d", "../dist", "-s", "site", "-v"];
const hugoArgsPreview = ["--buildDrafts", "--buildFuture"];

// Development tasks
gulp.task("hugo", (cb) => buildSite(cb));
gulp.task("hugo-preview", (cb) => buildSite(cb, hugoArgsPreview));

// Build/production tasks
gulp.task("build", ["css", "scss", "cms-assets", "js"], (cb) => buildSite(cb, [], "production"));
gulp.task("build-preview", ["css", "scss", "js"], (cb) => buildSite(cb, hugoArgsPreview, "production"));

// CSS
gulp.task("css", () => (
  gulp.src("./src/css/*.css")
    .pipe(postcss([
      cssImport(),
      cssnext(),
      cssnano()
    ]))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browserSync.stream())
));


// SASS
gulp.task("scss", () => (
  gulp.src("./src/scss/main.scss")
    .pipe( maps.init() )
    .pipe(
      sass(
        {
          errLogToConsole: true,
          outputStyle: "compressed"
        }
      )
      .on( "error", onError )
    )
    .pipe(
      postcss(
        [
          autoprefixer(
            {
              browsers: [">0.1%"],
              cascade : false,
              remove  : true
            }
          )
        ]
      )
    )
    .pipe(maps.write("."))
    .pipe(gulp.dest("./dist/css"))
    // .pipe(browserSync.stream())
));

gulp.task("cms-assets", () => (
  gulp.src("./node_modules/netlify-cms/dist/*.{woff,eot,woff2,ttf,svg,png}")
    .pipe(gulp.dest("./dist/css"))
))

function onError( err ) {
  notify().write( err );
  this.emit( 'end' );
}

// Compile Javascript
gulp.task("js", (cb) => {
  const myConfig = Object.assign({}, webpackConfig);

  webpack(myConfig, (err, stats) => {
    if (err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      colors: true,
      progress: true
    }));
    // browserSync.reload();
    cb();
  });
});

// Development server with browsersync
gulp.task("server", ["scss", "js", "css"], () => {
  // browserSync.init({
  //   open: false,
  //   server: {
  //     baseDir: "./dist"
  //   }
  // });
  watch("./src/js/**/*.js", () => { gulp.start(["js"]) });
  watch("./src/scss/**/*.scss", () => { gulp.start(["scss"]) });
  watch("./src/css/**/*.css", () => { gulp.start(["css"]) });
  // watch("./site/**/*", () => { gulp.start(["hugo"]) });
});

/**
 * Run hugo and build the site
 */
function buildSite(cb, options, environment = "development") {
  const args = options ? hugoArgsDefault.concat(options) : hugoArgsDefault;

  process.env.NODE_ENV = environment;

  return spawn(hugoBin, args, {stdio: "inherit"}).on("close", (code) => {
    if (code === 0) {
      browserSync.reload();
      cb();
    } else {
      browserSync.notify("Hugo build failed :(");
      cb("Hugo build failed");
    }
  });
}

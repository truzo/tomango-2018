var githubapi = require('github'),
  async = require('async'),
  https = require('https'),
  secrets = {
    password: '8?zur!zYyg',
    user: 'trys',
    repo: 'tomango-2018'
  };

exports.handler = function(event, context, callback) {
  event.body = JSON.parse(event.body)

  if (event.body === undefined || event.body.image === undefined || event.body.caption === undefined || event.body.url === undefined) {
    return callback(null, { statusCode: 400, body: 'Params not supplied' });
  }

  if ( event.body.key !== 'Ke?uAzgP*4' ) return callback(null, { statusCode: 401, body: 'Incorrect key supplied' });

  var commitSha, treeSha, newCommitSha, image, content;

  var file = event.body.image.split('/');
  file = 'https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s1080x1080/e15/' + file[file.length - 1];
  
  var caption = event.body.caption;
  var url = event.body.url;

  // github info
  var { user, password, repo } = secrets;
  var commitMessage = 'New instagram image: ' + new Date().toString();
  var github = new githubapi({version: "3.0.0"});

  var time = Date.now();
  var date = new Date();

  console.log('Signing in to GitHub...', user, password);

  github.authenticate({
    type: 'basic',
    username: user,
    password: password
  });

  console.log('Authenticated...');

  async.waterfall([

    function scrape_image_from_instagram(callback){
      console.log('Getting the image...')
      image = '';
      https.get(file, (resp) => {
        resp.setEncoding('base64');
        resp.on('data', (data) => { image += data});
        resp.on('end', () => {
          console.log('Image retrieved...')
          callback(null);
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
    },


    function upload_image_blob(callback) {
      console.log('Uploading image to GitHub...');
      github.gitdata.createBlob({
        owner: user,
        repo: repo,
        content: image,
        encoding: 'base64'
      }, function(err, data) {
        if (err) console.log(err);
        if (!err) {
          console.log('Image successfully uploaded to GitHub');
          image = data.data.sha
          callback(null);
        }
      });
    },


    function create_markdown_file(callback) {
      content = `---
title: Instagram: ${date.toString()}
blog/categories:
- instagram
date: ${date.toISOString().slice(0,-14)}
image: images/blog/${time}.jpg
originalURL: ${url}
---

${caption}`;
      callback(null);
    },



    function get_branch_reference(callback){
      console.log('Getting branch reference...');
      github.gitdata.getReference({
        owner: user,
        user: user,
        repo: repo,
        ref: 'heads/master'
      }, function(err, data){
       if (err) console.log(err);
       if (!err) {
          commitSha = data.data.object.sha;
          callback(null);
        }
      });
    },

    // Create a tree ready to commit
    function create_tree(callback){
      console.log('Creating tree...');
      var files = [{
        path: `site/static/images/blog/${time}.jpg`,
        mode: '100644',
        type: 'blob',
        sha: image
      }, {
        path: `site/content/blog/${time}.md`,
        mode: '100644',
        type: 'blob',
        content: content
      }];

      github.gitdata.createTree({
        owner: user,
        user: user,
        repo: repo,
        tree: files,
        base_tree: commitSha
      }, function(err, data){
        if (err) console.log(err);
        if (!err) {
          treeSha = data.data.sha;
          callback(null);
        }
      });
    },


    function commit_the_files(callback){
      console.log('Creating commit...');
      github.gitdata.createCommit({
        owner: user,
        user: user,
        repo: repo,
        message: commitMessage,
        tree: treeSha,
        parents: [commitSha]
      }, function(err, data){
        if (err) console.log(err);
        if (!err) {
          newCommitSha = data.data.sha;
          callback(null);
        }
      });
    },


    function update_git_reference(callback){
      console.log('Updating reference...');
      github.gitdata.updateReference({
        owner: user,
        user: user,
        repo: repo,
        ref: 'heads/master',
        sha: newCommitSha,
        force: true
      }, function(err, data){
        if (err) console.log(err);
        if (!err) callback(null, 'done');
      });
    }

  ], function (err, result) {
    if (err) return callback(null, { statusCode: 400, body: 'Error during import' });
    else return callback(null, { statusCode: 200, body: 'Image imported' });
  });

};


import React from "react";

export default class PostPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    return <div>
      <h1>{ entry.getIn(["data", "title"])}</h1>
      <div className="cms content">
        <p>{ entry.getIn(["data", "description"]) }</p>
        <br />
        { image && <img src={ image } /> }
        <br />
        { widgetFor("body") }
      </div>
    </div>;
  }
}

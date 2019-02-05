import React from "react";

const News = props => {
  return (
    <div className="newsWrapper">
      <div className="newsImage">
        <img
          // src="https://images.freeimages.com/images/large-previews/2ec/dog-1401768.jpg"
          src={props.imgurl}
          alt="dog"
        />
      </div>
      <div className="ui card">
        <div className="content">
          <div className="header">{props.title}</div>
          <div className="meta">Published: {props.date}</div>
          <div className="description">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;

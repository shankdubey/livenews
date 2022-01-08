import React from "react";

const NewsItem = (props) => {
  console.log("Hello");

  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img src={props.urltoimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.url} className="btn btn-sm btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;

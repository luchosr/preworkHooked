import React from "react";

const RedditPost = props => (
  <li className="redditNews">
    <h5
      className="postTittle"
      style={{ color: "#F8F8F2", margin: "0 0 4px 0", fontSize: "14px" }}
    >
      {props.title}
    </h5>
    <h6
      className="postAuthor"
      style={{ color: "#66d9ef", margin: "0 0 4px 0", fontSize: "14px" }}
    >
      Posted By <span style={{ color: "#f1fa8c" }}>{props.author}</span>{" "}
    </h6>
    <h6 className="score" style={{ color: "#6272a4", margin: "0 0 4px 0" }}>
      Reddit Score {props.score}
    </h6>
    <a
      href={props.url}
      className="comments"
      style={{ textDecoration: "none", color: "#ff79c6", padding: "10px" }}
    >
      Link to Comments
    </a>
  </li>
);

export default RedditPost;

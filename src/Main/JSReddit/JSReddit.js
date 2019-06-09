import React, { useState, useEffect } from "react";

const JSReddit = () => {
  // const [redditPost, getRedditPost] = useState([]);

  return (
    <li className="redditNews">
      <h5
        className="postTittle"
        style={{ color: "#F8F8F2", padding: "10px", fontSize: "0.9em" }}
      >
        titulo
      </h5>
      <h6
        className="postAuthor"
        style={{ color: "#66d9ef", padding: "5px 10px", fontSize: "0.8em" }}
      >
        Posted By <span style={{ color: "#f1fa8c" }}>autor</span>{" "}
      </h6>
      <h6 className="score" style={{ color: "#6272a4", padding: "10px" }}>
        reddit score puntos
      </h6>
      <a
        href="www.google.com"
        className="comments"
        style={{ textDecoration: "none", color: "#ff79c6", padding: "10px" }}
      >
        Link to Comments
      </a>
    </li>
  );
};

export default JSReddit;

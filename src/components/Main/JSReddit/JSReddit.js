import React, { useState, useEffect } from "react";
import RedditPost from "../RedditPost/RedditPost";
import { faDivide } from "@fortawesome/free-solid-svg-icons";

const JSReddit = () => {
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [redditPost, setredditPost] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    setisLoading(true);
    await fetch("https://www.reddit.com/r/javascript.json")
      .then(response => response.json())
      .then(response => {
        const { children } = response.data;
        setredditPost(children);
      })
      .catch(error => seterror(error))
      .finally(() => setisLoading(false));
  };
  return (
    // aca mapeas reddit post y retornas la plantilla con los datos.
    <ul>
      {!error &&
        redditPost.length > 0 &&
        redditPost.map(post => (
          <RedditPost
            key={post.data.id}
            title={post.data.title}
            author={post.data.author}
            url={post.data.url}
            score={post.data.score}
          />
        ))}
    </ul>
  );
};

export default JSReddit;

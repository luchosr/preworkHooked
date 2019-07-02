import React, { useState, useEffect } from "react";
import RedditPost from "../RedditPost/RedditPost"

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
{
  redditPost.map(post => )
}
  );
};

export default JSReddit;

import React from "react";
import JSData from "./JSData";
import JsItem from "./JsItem";
import "./styles.css";

const JsItemsContainer = () => {
  const jsItems = JSData.map(data => (
    <JsItem id={data.id} timeAgo={data.timeAgo} title={data.title} />
  ));
  return <ul className="JsHistory">{jsItems}</ul>;
};
export default JsItemsContainer;

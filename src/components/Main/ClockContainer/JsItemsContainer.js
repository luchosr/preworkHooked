import React from "react";
import JSData from "./JSData";
import JsItem from "./JsItem";

const JsItemsContainer = () => {
  const jsItems = JSData.map(data => (
    <JsItem id={data.id} timeAgo={data.timeAgo} title={data.title} />
  ));
  return <div>{jsItems}</div>;
};
export default JsItemsContainer;

import React from "react";

const Container = props => {
  let listItems = props.items;
  return (
    <div
      className="container"
      style={{ maxHeight: props.maxHeight, width: props.width }}
    >
      <h4 className="container__title">{props.title}</h4>
      <ul className="container__uList">{listItems}</ul>
    </div>
  );
};
export default Container;

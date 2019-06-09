import React, { useState, useEffect } from "react";
import "./styles.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import JSReddit from "../JSReddit/JSReddit";
library.add(faRedditAlien, faClock, faGithub);

const MainContainer = props => {
  let listItems = props.items;
  return (
    <div
      className="container"
      style={{ maxHeight: props.maxHeight, width: props.width }}
    >
      <h4 className="container__title">
        <span>
          <FontAwesomeIcon icon={props.titleIcon} />
        </span>
        {props.title}
      </h4>
      <ul className="container__uList">
        <props.itemComponent />
      </ul>
    </div>
  );
};
export default MainContainer;

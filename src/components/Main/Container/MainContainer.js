import React, { useState, useEffect } from "react";
import "./styles.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedditAlien,
  faGithub,
  faReddit
} from "@fortawesome/free-brands-svg-icons";
import { faClock, faWrench } from "@fortawesome/free-solid-svg-icons";
import JSReddit from "../JSReddit/JSReddit.js";
library.add(faRedditAlien, faClock, faGithub, faWrench, faReddit);

const MainContainer = props => {
  const { itemComponent: ItemComponent } = props;
  return (
    <div
      className="container"
      style={{ maxHeight: props.maxHeight, width: props.width }}
    >
      <h4 className="container__title">
        <span className="container__icon">
          <FontAwesomeIcon icon={props.titleIcon} />
        </span>
        {props.title}
      </h4>
      <JSReddit />
      {/* <ul className="container__uList">
        <ItemComponent />
      </ul> */}
    </div>
  );
};
export default MainContainer;

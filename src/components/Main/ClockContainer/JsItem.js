import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faJsSquare);
const JsItem = props => (
  <li className="item">
    <FontAwesomeIcon
      icon={faJsSquare}
      style={{ color: "rgb(230, 218, 116)", marginRight: "10px" }}
    />
    <a href="" className="item__link">
      {props.title}
    </a>

    <span className="time">{props.timeAgo}</span>
  </li>
);
export default JsItem;


​

import React from "react";
import JsItemsContainer from "../ClockContainer/JsItemsContainer";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Clock from "../ClockContainer/Clock";
library.add(faClock);

const JsHistoryContainer = () => (
  <div>
    <h4 className="container__title">
      <span className="container__icon">
        <FontAwesomeIcon icon={faClock} />
      </span>
      RELEVANT JAVASCRIPT HISTORY
    </h4>
    <JsItemsContainer />
    <Clock />
  </div>
);

export default JsHistoryContainer;

import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContainer from "./components/Main/Container/MainContainer";
import JSReddit from "./components/Main/JSReddit/JSReddit";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faWrench } from "@fortawesome/free-solid-svg-icons";
import {
  faRedditAlien,
  faGithub,
  faReddit
} from "@fortawesome/free-brands-svg-icons";
import JsItemsContainer from "./components/Main/ClockContainer/JsItemsContainer";

library.add(faRedditAlien, faClock, faGithub, faWrench, faReddit);

function App() {
  return (
    <div className="App">
      <Sidebar />

      <MainContainer
        maxHeight="100%"
        width="25%"
        title="Popular on r/javascript"
        itemComponent={JSReddit}
        titleIcon={faRedditAlien}
      />
      <MainContainer
        maxHeight="100%"
        width="49%"
        title="Relevant javascript history"
        itemComponent={JsItemsContainer}
        titleIcon={faClock}
      />
    </div>
  );
}

export default App;

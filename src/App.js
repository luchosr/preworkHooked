import React from "react";
import "./App.css";
import Sidebar from "./Sidebar/Sidebar";
import MainContainer from "./Main/Container/MainContainer";

function App() {
  return (
    <div className="App">
      <Sidebar />

      <MainContainer
        maxHeight="100%"
        width="25%"
        title="Popular on r/javascript"
        itemComponent="JSReddit"
        titleIcon="faRedditAlien"
      />
    </div>
  );
}

export default App;

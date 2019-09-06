import React from "react";
import Header from "./components/Header";
import AppOptions from "./components/AppOptions";
import LineupGroup from "./components/LineupGroup";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AppOptions />
        <LineupGroup />
      </div>
    </div>
  );
}

export default App;

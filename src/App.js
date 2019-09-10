import React from "react";
import Header from "./components/Header";
import AppOptions from "./components/AppOptions";
import "./App.css";
import LineupGroups from "./components/LineupGroup";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <AppOptions />
        <LineupGroups refresh={false} refreshRate={10} />
      </div>
    </div>
  );
}

export default App;

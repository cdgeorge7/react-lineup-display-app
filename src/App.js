import React from "react";
import Lineup from "./components/Lineup";
import Header from "./components/Header";
import "./App.css";

import dummyLineupsData from "./components/dummyLineupsData";

function App() {
  const lineups = dummyLineupsData.map(lineup => (
    <Lineup
      key={lineup.lineup_id}
      id={lineup.lineup_id}
      players={lineup.players}
      points={lineup.lineup_points}
    />
  ));
  return (
    <div>
      <Header />
      <div className="container">{lineups}</div>
    </div>
  );
}

export default App;

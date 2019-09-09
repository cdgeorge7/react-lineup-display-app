import React from "react";
import Refresh from "./Refresh";
import PlayerFilter from "./PlayerFilter";
import "../styles/style.css";

export default function AppOptions() {
  return (
    <div className="parent">
      <Refresh />
      <PlayerFilter />
    </div>
  );
}

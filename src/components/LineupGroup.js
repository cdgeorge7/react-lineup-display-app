import React, { useState, useEffect } from "react";
import Lineup from "./Lineup";
import uuid4 from "uuid";
/* import axios from "axios"; */

/* import dummyLineupsData from "./dummyLineupsData"; */

export default function LineupGroup() {
  /*   const lineups = dummyLineupsData.map(lineup => (
    <Lineup
      key={uuid4()}
      id={lineup.lineup_id}
      players={lineup.players}
      points={lineup.lineup_points}
    />
  )); */

  const [lineups, setLineups] = useState([]);
  const [hasError, setError] = useState(false);

  const LINEUPS_URL = "http://localhost:5000/lineups";
  async function fetchData() {
    await fetch(LINEUPS_URL)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error happened");
        }
      })
      .then(resJSON => {
        /* console.log(JSON.parse(res).lineups); */
        setLineups(
          JSON.parse(resJSON).lineups.map(lineup => (
            <Lineup
              key={uuid4()}
              id={lineup.lineup_id}
              players={lineup.players}
              points={lineup.lineup_points}
            />
          ))
        );
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  /* axios.get(LINEUPS_URL).then(res => {useState({
    res.data.lineups.map(lineup => (
      <Lineup
        key={uuid4()}
        id={lineup.lineup_id}
        players={lineup.players}
        points={lineup.lineup_points}
      />
    ));
    return {lineups};
  })}); */

  const rows = [];
  const LINEUPS_PER_ROW = 3;
  let lineupRowGroup = [];
  for (let i = 0; i < lineups.length; i++) {
    if (lineupRowGroup.length < LINEUPS_PER_ROW) {
      lineupRowGroup.push(lineups[i]);
    } else {
      rows.push(
        <div className="row" key={uuid4()}>
          {lineupRowGroup}
        </div>
      );
      lineupRowGroup = [lineups[i]];
    }
    if (i + 1 === lineups.length) {
      rows.push(
        <div className="row" key={uuid4()}>
          {lineupRowGroup}
        </div>
      );
    }
  }
  return hasError ? <div>error</div> : <div>{rows}</div>;
}

import React, { useState, useEffect, useRef } from "react";
import PlayerRow from "./PlayerRow";
import uuid4 from "uuid";
import axios from "axios";
import "../styles/style.css";

export default function Lineup(props) {
  const DELAY = 100;
  const [points, setPoints] = useState(props.points);
  const [delay, setDelay] = useState(DELAY);
  let savedPoints = useRef(props.points);

  const LINEUP_URL = "http://localhost:5000/lineups?lineup_id=" + props.id;

  /*   const updatePoints = pointDiff => {
    let pointIntVal = Math.trunc(pointDiff);
    let remainingDecimal = pointDiff - pointIntVal;
    if (pointIntVal > 0) {
      //handle increment
      for (const i of Array(pointIntVal).keys()) {
        console.log(i);
        setPoints(points + i + 1);
      }
    } else {
      //handle decrement
      for (const i of Array(pointIntVal).keys()) {
        setPoints(points - 1);
      }
    }
    if (remainingDecimal !== 0) {
      setPoints(points + remainingDecimal);
    }
  }; */

  async function checkLineup() {
    await axios
      .get(LINEUP_URL)
      .then(resJSON => {
        console.log("checking lineup: " + props.id);
        console.log(JSON.parse(resJSON.data));
        const new_points = JSON.parse(resJSON.data).lineup_points;
        console.log("old points: " + points);
        savedPoints.current = new_points;
        if (new_points !== points) {
          setDelay(DELAY);
        }
        //setPoints(new_points);
        setTimeout(checkLineup, 10000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  useEffect(() => {
    checkLineup();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useInterval(() => {
    console.log(savedPoints.current);
    if (points === savedPoints.current) {
      setDelay(null);
      return;
    }
    setPoints(points + 1);
    console.log("interval points: " + points);
    console.log(delay);
  }, delay);

  return (
    <div>
      <h1>{points}</h1>
    </div>
  );

  //main return
  /*
  return (
    <div className="col-md-4 pb">
      <button
        className="btn btn-primary btn-lg btn-block"
        type="button"
        data-toggle="collapse"
        data-target={"#lineup-table-" + props.id}
      >
        Score: {points}
      </button>
      <div className="collapse" id={"lineup-table-" + props.id}>
        <table className="table table-bordered table-striped table-hover">
          <thead>
            <tr>
              <th>Position</th>
              <th>Player</th>
              <th>Team</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {props.players.map(player => (
              <PlayerRow
                key={uuid4()}
                position={player.position}
                playerName={player.player_name}
                team={player.team}
                draftkingsPoints={player.dk_points}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  */
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

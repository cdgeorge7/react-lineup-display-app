import React from "react";
import PlayerRow from "./PlayerRow";
import uuid4 from "uuid";
import "../styles/style.css";

export default function Lineup(props) {
  return (
    <div className="col-md-4 pb">
      <button
        className="btn btn-primary btn-lg btn-block"
        type="button"
        data-toggle="collapse"
        data-target={"#lineup-table-" + props.id}
      >
        Score: {props.points}
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
}

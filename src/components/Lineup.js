import React from "react";
import PlayerRow from "./PlayerRow";

export default function Lineup(props) {
  return (
    <div className="row">
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
          <tr>
            <th>Position</th>
            <th>Player</th>
            <th>Team</th>
            <th>Points</th>
          </tr>
          {props.players.map(player => (
            <PlayerRow
              position={player.position}
              playerName={player.player_name}
              team={player.team}
              draftkingsPoints={player.dk_points}
            />
          ))}
        </table>
      </div>
    </div>
  );
}

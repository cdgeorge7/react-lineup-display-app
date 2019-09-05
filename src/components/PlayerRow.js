import React from "react";

function PlayerRow(props) {
  return (
    <tr>
      <td>{props.position}</td>
      <td>{props.playerName}</td>
      <td>{props.team}</td>
      <td>{props.draftkingsPoints}</td>
    </tr>
  );
}

export default PlayerRow;

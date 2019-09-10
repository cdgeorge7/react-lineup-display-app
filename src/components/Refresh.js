import React from "react";

export default function Refresh() {
  return (
    <div>
      <span>Refresh data</span>
      <br />
      <input
        type="radio"
        name="five_seconds"
        value="0"
        defaultChecked="checked"
      />{" "}
      0
      <br />
      <input type="radio" name="five_seconds" value="10" /> 10
      <br />
      <input type="radio" name="five_seconds" value="30" /> 30
    </div>
  );
}

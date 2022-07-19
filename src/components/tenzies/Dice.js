import React from "react";

function Dice(props) {
  return (
    <div
      className={`h-9 w-9 shadow-lg flex items-center justify-center font-bold rounded-md border border-gray-300 ${
        props.locked && "bg-green-400"
      } bg-white`}
    >
      {props.score}
    </div>
  );
}

export default Dice;

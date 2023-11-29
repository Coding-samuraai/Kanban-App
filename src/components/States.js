import React from "react";
import "./States.css";
import { useState } from "react";

function States({ label, waysList,setSortCondition }) {
  let [way, setWay] = useState(waysList[0]);

  function handleChange(event) {
    setWay(event.target.value);

    setSortCondition((prevSortCondition)=>{
        return {
            ...prevSortCondition,
            [label]:event.target.value
        }
    })
  }

  return (
    <div className="state">
      <label for="ways">
        <h6>{label}</h6>
      </label>
      <select name="ways" id="ways" onChange={handleChange}>
        {waysList.map((currentWay) => {
          return <option value={currentWay}>{currentWay}</option>;
        })}
      </select>
    </div>
  );
}

export default States;

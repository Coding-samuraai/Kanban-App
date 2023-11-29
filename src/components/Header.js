import React from "react";
import "./Header.css";
import { useState } from "react";
import States from "./States";

function Header({ setSortCondition }) {
  let [stateDisplayDrop, setStateDisplayDrop] = useState(false);

  function handleClick() {
    setStateDisplayDrop(!stateDisplayDrop);
  }
  return (
    <div className="header">
      <div style={{ position: "relative" }}>
        <div className="state-display" onClick={handleClick}>
          <img
            src={require("./Header-util-img-1.png")}
            alt="IMG"
            width={"15px"}
          />
          <h6>Display</h6>
          <img
            src={require("./Header-util-img-2.png")}
            alt="IMG"
            width={"12px"}
          />
        </div>
        {stateDisplayDrop ? (
          <div
            className="state-display-drop-container"
            style={{ position: "absolute" }}
          >
            <States
              label={"Grouping"}
              waysList={["Status", "User", "Priority"]}
              setSortCondition={setSortCondition}
            />
            <States
              label={"Ordering"}
              waysList={["Priority", "Title"]}
              setSortCondition={setSortCondition}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Header;

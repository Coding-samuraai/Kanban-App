import React from "react";
import "./Tag.css";
import { GoDotFill } from "react-icons/go";

function Tag() {
  return (
    <div className="feature-request">
      <GoDotFill color="#dbdde2" size={"1.3em"} />
      <div>Feature Request</div>
    </div>
  );
}

export default Tag;

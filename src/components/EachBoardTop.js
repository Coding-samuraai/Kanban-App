import React from "react";
import "./EachBoardTop.css";
import PriorityIcon from "../CustomHooks/PriorityIcon";
import StatusIcon from "../CustomHooks/StatusIcon";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaCircle } from "react-icons/fa";

function EachBoardTop({ title, length, grouping, available }) {
  return (
    <div className="board-top">
      <div className="board-top-left">
        {grouping === "User" ? (
          <div>{title}</div>
        ) : grouping === "Priority" ? (
          PriorityIcon(title)
        ) : (
          StatusIcon(title)
        )}
        {grouping === "User" ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaCircle
              size={".5em"}
              color={available ? "green" : "#dbdde2"}
              style={{ marginLeft: "1em" }}
            />
          </div>
        ) : (
          <div>
            {title === "nopriority" ? "No Priority" : title.toUpperCase()}
          </div>
        )}
        <div>{length}</div>
      </div>
      <div className="board-top-right">
        <FiPlus />
        <HiOutlineDotsHorizontal />
      </div>
    </div>
  );
}

export default EachBoardTop;

import React from "react";
import Tag from "./Tag";
import "./Card.css";
import PriorityIcon from "../CustomHooks/PriorityIcon";
import StatusIcon from "../CustomHooks/StatusIcon";
import { FaCircle } from "react-icons/fa";

function Card({ currData: data, grouping }) {
  let priorityIcon = PriorityIcon(data.priority);
  let statusIcon = StatusIcon(data.status);
  let userName = data.name;
  

  if (grouping === "Priority") priorityIcon = null;

  if (grouping === "Status") statusIcon = null;

  if (grouping === "User") userName = null;

  return (
    <>
      <div className="card">
        <div className="card-top">
          <div>{data.id}</div>
          {userName === null ? (
            <div></div>
          ) : (
            <div className="name-available">
              <div>{userName}</div>
              <div>
                {
                  <FaCircle
                    size={".5em"}
                    color={data.available ? "green" : "#dbdde2"}
                    style={{ marginLeft: "1em" }}
                  />
                }
              </div>
            </div>
          )}
        </div>
        <div className="card-middle">
          {statusIcon === null ? (
            <div></div>
          ) : (
            <div className="status-icon">{statusIcon}</div>
          )}
          <div className="ticket-title">{data.title}</div>
        </div>
        <div className="card-bottom">
          {priorityIcon === null ? (
            <div></div>
          ) : (
            <div className="priority-icon">{priorityIcon}</div>
          )}
          <Tag />
        </div>
      </div>
    </>
  );
}

export default Card;

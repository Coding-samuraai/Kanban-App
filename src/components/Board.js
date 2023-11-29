import React from "react";
import "./Board.css";
import Card from "./Card";
import GetPriority from "../CustomHooks/GetPriority";
import SortOnPriority from "../CustomHooks/SortOnPriority";
import SortOnTitle from "../CustomHooks/SortOnTitle";
import CreateBoard from "./CreateBoard";

function Board({ data: { tickets, users }, sortCondition }) {
  let gStatus = {
    backlog: [],
    todo: [],
    inprogress: [],
    done: [],
    cancelled: [],
  };
  let gUser = {};
  let gPriority = { nopriority: [], urgent: [], high: [], medium: [], low: [] };

  for (let i = 0; i < tickets.length; i++) {
    gStatus[tickets[i].status.replace(" ", "").toLowerCase()].push(tickets[i]);
    gPriority[GetPriority(tickets[i].priority)].push(tickets[i]);
  }

  for (let i = 0; i < users.length; i++) {
    gUser[users[i].name] = [];
  }

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < tickets.length; j++) {
      if (users[i].id === tickets[j].userId) {
        gUser[users[i].name].push({
          ...tickets[j],
          ["available"]: users[i].available,
        });
      }
    }
  }

  if (sortCondition.Ordering === "Priority") {
    SortOnPriority(gStatus, gPriority, gUser);
  } else {
    SortOnTitle(gStatus, gPriority, gUser);
  }

  let board = null;

  if (sortCondition.Grouping === "Status")
    board = <CreateBoard data={gStatus} grouping={"Status"} />;
  else if (sortCondition.Grouping === "Priority")
    board = <CreateBoard data={gPriority} grouping={"Priority"} />;
  else board = <CreateBoard data={gUser} grouping={"User"} />;

  return <div className="board">{board}</div>;
}

export default Board;

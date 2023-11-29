import React from "react";
import { CgBorderStyleDashed } from "react-icons/cg";
import {
  MdOutlineSignalCellularAlt2Bar,
  MdOutlineSignalCellularAlt1Bar,
  MdOutlineSignalCellularAlt,
} from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";

function convert(priority) {


  if (typeof priority === "number") return;

  switch (priority) {
    case "nopriority":
      return 0;
    case "low":
      return 1;
    case "medium":
      return 2;
    case "high":
      return 3;
    case "urgent":
      return 4;
  }
}

function PriorityIcon(priorityIcon) {

  priorityIcon = convert(priorityIcon);
  console.log(priorityIcon);


  switch (priorityIcon) {
    case 0:
      return <CgBorderStyleDashed />;
    case 4:
      return <FcHighPriority />;
    case 3:
      return <MdOutlineSignalCellularAlt />;
    case 2:
      return <MdOutlineSignalCellularAlt2Bar />;
    case 1:
      return <MdOutlineSignalCellularAlt1Bar />;
  }
}

export default PriorityIcon;

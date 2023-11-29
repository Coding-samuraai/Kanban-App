import React from "react";
import { TbCircleDotted } from "react-icons/tb";
import { FaRegCircle } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiXCircleFill } from "react-icons/pi";
import { PiCircleHalfDuotone } from "react-icons/pi";

function getStatus(status) {
  if (typeof status != "number") return;

  switch (status) {
    case 0:
      return "backlog";
    case 1:
      return "todo";
    case 2:
      return "done";
    case 3:
      return "cancelled";
    case 4:
      return "inprogress";
  }
}

function StatusIcon(status) {
  if (status === "backlog") return <TbCircleDotted />;
  else if (status === "todo") return <FaRegCircle color="#dbdde2" />;
  else if (status === "done") return <IoIosCheckmarkCircle color="blue" />;
  else if (status === "cancelled") return <PiXCircleFill />;
  else return <PiCircleHalfDuotone color="#C8FF21" />;
}

export default StatusIcon;

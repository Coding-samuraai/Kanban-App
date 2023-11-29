import React from "react";

function sortOnPriority(gStatus, gPriority, gUser) {
  for (const item in gStatus) {
    gStatus[item].sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  for (const item in gPriority) {
    gPriority[item].sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  for (const item in gUser) {
    gUser[item].sort((a, b) => {
      return a.priority - b.priority;
    });
  }
}

export default sortOnPriority;

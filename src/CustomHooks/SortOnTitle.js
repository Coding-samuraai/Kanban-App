import React from "react";

function sortOnTitle(gStatus, gPriority, gUser) {
  for (const item in gStatus) {
    gStatus[item].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  for (const item in gPriority) {
    gPriority[item].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }

  for (const item in gUser) {
    gUser[item].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
  }
}

export default sortOnTitle;

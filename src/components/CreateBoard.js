import React from "react";
import "./CreateBoard.css";
import Card from "./Card";
import EachBoardTop from "./EachBoardTop";

function CreateBoard({ data, grouping }) {


  return (
    <div className="create-board">
      {Object.keys(data).map((key) => {
    {/* console.log(key,'.'); */}

        return (
          <div className="create-board-child">
            <EachBoardTop
              title={key}
              length={data[key].length}
              grouping={grouping}
              available={data.available}
            />
            {data[key].map((currData) => {
              return <Card currData={currData} grouping={grouping} />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default CreateBoard;

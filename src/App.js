import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  let [sortCondition, setSortCondition] = useState({
    Grouping: "Status",
    Ordering: "Title",
  });

  let [data, setData] = useState(null);

  useEffect(() => {
    let bringData = async () => {
      let response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      setData(await response.json());
    };

    bringData();
  }, []);

  return (
    <>
      <Header setSortCondition={setSortCondition} />
      {data === null ? <div className="loading">Loading...</div> : <Board data={data} sortCondition={sortCondition}/>}
    </>
  );
}

export default App;

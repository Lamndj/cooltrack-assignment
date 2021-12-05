import React, { useEffect } from "react";

import ChartData from "./components/ChartData";

import { fetchChartData } from "./actions/chart";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    await fetchChartData(dispatch);
  };

  return (
    <div className="app">
      <ChartData />
    </div>
  );
}

export default App;

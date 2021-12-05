import Chart from "chart.js/auto";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import SingleChart from "./SingleChart";

import "./styles.css";

function ChartData() {
  const chartData = useSelector((state) => state.chartData.chartData);
  const chartDataError = useSelector((state) => state.chartData.err);

  const dispatch = useDispatch();

  const handleChartInputChange = (value, chartIndex, chartValueIndex) => {
    const data = [...chartData];
    data[chartIndex].elements[chartValueIndex] = value;

    dispatch({
      type: "FETCH_CHART_DATA",
      payload: data,
    });
  };

  return (
    <div className="chartContainer">
      {chartData.map((val, index) => {
        return (
          <SingleChart
            val={val}
            index={index}
            key={val.type + index}
            handleChartInputChange={handleChartInputChange}
          />
        );
      })}
    </div>
  );
}

export default ChartData;

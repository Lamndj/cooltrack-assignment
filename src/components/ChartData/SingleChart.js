import React from "react";
import { Bar, Pie } from "react-chartjs-2";

import randomColor from "randomcolor";

function SingleChart({ val, index, handleChartInputChange }) {
  let colorArr = [];

  val.elements.forEach((Val) => {
    colorArr.push(
      randomColor({
        luminosity: "random",
        hue: "random",
      })
    );
  });

  const data = {
    labels: [...val.elements],
    datasets: [
      {
        label: "Random Stats",
        data: [...val.elements],
        backgroundColor: [...colorArr],
        borderWidth: 1,
      },
    ],
  };

  const options = { maintainAspectRatio: false };

  return (
    <div className="singleChartContainer">
      {/* display chart here */}
      <h3>Chart {index + 1}</h3>

      <div className="singleChartContainer__chart">
        {val.type === "Bar" && (
          <Bar className="singleChar__chart" data={data} />
        )}
        {val.type === "Pie" && (
          <Pie className="singleChar__chart" data={data} />
        )}
      </div>

      <div className="singleChart__inputContainer">
        {val.elements.map((ele, idx) => (
          <input
            type="number"
            value={ele}
            onChange={(e) => handleChartInputChange(e.target.value, index, idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(SingleChart);

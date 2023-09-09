import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart(props: any) {
  const chartData = {
    labels: Object.keys(props.chartData),
    datasets: [
      {
        label: "Number of strikes by meteorite composition",
        data: Object.values(props.chartData),
        backgroundColor: [
          "#6096B4",
          "#93BFCF",
          "#F4B183",
          "#8294C4",
          "#ACB1D6",
          "#FFD966",
          "#BDCDD6",
          "#EEE9DA",
          "#DFA67B",
        ],
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Number of strikes by meteorite composition",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default PieChart;

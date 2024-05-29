import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function ChartPractice() {
  const dataset = [
    {
      label: "Dataset 1",
      data: [35, 44, 24, 34],
      backgroundColor: "#5a5a5a",
    },
    {
      label: "Dataset 2",
      data: [51, 6, 49, 30],
      backgroundColor: "#a5a5a5",
    },
    {
      label: "Dataset 3",
      data: [15, 25, 30, 50],
      backgroundColor: "#5a5a5a",
    },
    {
      label: "Dataset 4",
      data: [60, 50, 15, 25],
      backgroundColor: "#a5a5a5",
    },

    // {
    //   label: "Dataset 5",
    //   data: [35, 44, 24, 34],
    //   backgroundColor: "#5a5a5a",
    // },
  ];
  return (
    // <p>asldfj</p>
    <BarChart
      // series={[
      //   { data: [35, 44, 24, 34] },
      //   { data: [51, 6, 49, 30] },
      //   { data: [15, 25, 30, 50] },
      //   { data: [60, 50, 15, 25] },
      // ]}
      dataset={dataset}
      series={dataset}
      height={290}
      // xAxis={[{ data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}

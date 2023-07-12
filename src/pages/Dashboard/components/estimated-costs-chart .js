import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip
);

export default function EstimatedCostsChart() {
  const options = {
    responsive: true,
    legend: {
      display: true,
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Individual",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
        borderColor: "rgb(71, 68, 166)",
        backgroundColor: "rgb(71, 68, 166)",
      },
      {
        label: "Team",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
        borderColor: "rgb(96, 166, 126)",
        backgroundColor: "rgb(96, 166, 126)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

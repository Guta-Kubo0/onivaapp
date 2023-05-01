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

export default function PointsDistributionChart() {
  const options = {
    responsive: true,
    legend: {
      display: false,
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
        label: "Onipoints Distributed",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 5000 })),
        borderColor: "rgb(71, 68, 166)",
        backgroundColor: "rgba(255, 255, 255, 1)",
      },
    ],
  };
  return <Line options={options} data={data} />;
}

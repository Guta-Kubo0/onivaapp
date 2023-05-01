import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["3 Days Off", "Spa Day", "$500", "Day Off"],
  datasets: [
    {
      label: "% of all claims",
      data: [50, 25, 15, 10],
      backgroundColor: [
        "rgba(180, 213, 237, 1)",
        "rgba(228, 102, 70, 1)",
        "rgba(242, 208, 167, 1)",
        "rgba(96, 166, 126, 1)",
      ],
      borderColor: [
        "rgba(180, 213, 237, 1)",
        "rgba(228, 102, 70, 1)",
        "rgba(242, 208, 167, 1)",
        "rgba(96, 166, 126, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export function ClaimsIndividualRewardChart() {
  return <Doughnut data={data} />;
}

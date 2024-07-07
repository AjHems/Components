import React, { useState } from "react";
import StuTable from "./StuTable";
import { Bar, Doughnut } from "react-chartjs-2";
import jsonData from "../Asset/data/stu.json";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function StudentAttendanceDashboard() {
  const [isChartOpen, setIsChartOpen] = useState(false);
  const programmes = jsonData.map((programme) => programme.programmeshortname);

  const totalPreviousPresentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) =>
        programme.batchData.map((batch) => batch.previouspresent)
      )
      .reduce((total, present) => total + present, 0);
  };

  const previousPresentData = programmes.map((shortname) =>
    totalPreviousPresentByProgram(shortname)
  );

  const totalPreviousAbsentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) =>
        programme.batchData.map((batch) => batch.previousabsent)
      )
      .reduce((total, absent) => total + absent, 0);
  };

  const previousAbsentData = programmes.map((shortname) =>
    totalPreviousAbsentByProgram(shortname)
  );

  const totalCurrentPresentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) =>
        programme.batchData.map((batch) => batch.currentpresent)
      )
      .reduce((total, present) => total + present, 0);
  };

  const currentPresentData = programmes.map((shortname) =>
    totalCurrentPresentByProgram(shortname)
  );

  const totalCurrentAbsentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) =>
        programme.batchData.map((batch) => batch.currentabsent)
      )
      .reduce((total, absent) => total + absent, 0);
  };

  const currentAbsentData = programmes.map((shortname) =>
    totalCurrentAbsentByProgram(shortname)
  );

  const barInitialData = {
    labels: programmes,
    datasets: [
      {
        label: "Yesterday Present",
        data: previousPresentData,
      borderColor: "rgb(54, 162, 235)",
      backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Yesterday Absent",
        data: previousAbsentData,
      borderColor: "rgb(255, 206, 86)",
      backgroundColor: "rgba(255, 206, 86, 0.5)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Today Present",
        data: currentPresentData,

        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Today Absent",
        data: currentAbsentData,

        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const curDayPreAvg = jsonData
    .map((e) => e.curpresentavg)
    .reduce((v1, v2) => v1 + v2);

  const curDayAbsAvg = jsonData
    .map((e) => e.curabesentavg)
    .reduce((v1, v2) => v1 + v2);

  const doughnutInitialData = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Percentage ",
        data: [curDayPreAvg, curDayAbsAvg],
        borderColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
        backgroundColor: ["rgba(75, 192, 192, 0.5)", "rgba(255, 99, 132, 0.5)"],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const barConfig = {
    type: "bar",
    data: barInitialData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Attendance Dashboard",
        },
      },
    },
  };

  const doughnutConfig = {
    type: "doughnut",
    data: doughnutInitialData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Institution Level",
        },
      },
    },
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div>
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsChartOpen((prev) => !prev)}>
            {isChartOpen ? "Table" : "Chart"}
          </button>
        </div>
        {!isChartOpen ? (
          <StuTable data={jsonData} />
        ) : (
          <div className="flex w-full gap-2">
            <div className="h-72 w-[30%] center">
              <Doughnut
                data={doughnutConfig.data}
                options={doughnutConfig.options}
              />
            </div>
            <div className="h-72 w-[70%]">
              <Bar data={barConfig.data} options={barConfig.options} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

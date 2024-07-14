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
import { ImTable } from 'react-icons/im';
import { FcComboChart } from 'react-icons/fc';
import InstaTable from "./InstaTable";
import ChartLoaders from "./ChartLoader";

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
  const programmes = jsonData.map((programme) => programme.programmeshortname ?? programme.deptshortname);

  const totalCurrentPresentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) => programme.batchData.map((batch) => batch.currentpresent))
      .reduce((total, present) => total + present, 0);
  };

  const currentPresentData = programmes.map((shortname) => totalCurrentPresentByProgram(shortname));

  const totalCurrentAbsentByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) => programme.batchData.map((batch) => batch.currentabsent))
      .reduce((total, absent) => total + absent, 0);
  };

  const currentAbsentData = programmes.map((shortname) => totalCurrentAbsentByProgram(shortname));

  const barInitialData = {
    labels: programmes,
    datasets: [
      {
        label: 'Present',
        data: currentPresentData,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      },
      {
        label: 'Absent',
        data: currentAbsentData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }
    ]
  };

  const curDayPreAvg = jsonData.map((e) => e.curpresentavg);
  const curDayAbsAvg = jsonData.map((e) => e.curabesentavg);

  const data1 = [];
  const data2 = [];

  if (curDayPreAvg.length > 0 && curDayAbsAvg.length > 0) {
    const preTotal = curDayPreAvg.reduce((a, c) => a + c);

    const absTotal = curDayAbsAvg.reduce((a, c) => a + c);

    data1.push(preTotal);
    data2.push(absTotal);

    // console.log(`Total - Present : ${preTotal} Absent : ${absTotal}`);
  } else {
    console.error('jsonData is 0');
  }

  // console.log(curDayPreAvg, curDayAbsAvg, "databook");

  console.log(curDayPreAvg);
  const doughnutInitialData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Total Count',
        data: [data1, data2],
        borderColor: ['rgb(75, 192, 192)', 'rgb(255, 99, 132)'],
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)'],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false
      }
    ]
  };

  // const plugin = {
  //   id: 'emptyDoughnut',
  //   afterDraw(chart, args, options) {
  //     const { datasets } = chart.data;
  //     const { color, width, radiusDecrease } = options;
  //     let hasData = false;

  //     for (let i = 0; i < datasets.length; i += 1) {
  //       const dataset = datasets[i];
  //       hasData |= dataset.data.length > 0;
  //     }

  //     if (!hasData) {
  //       const {
  //         chartArea: { left, top, right, bottom },
  //         ctx
  //       } = chart;
  //       const centerX = (left + right) / 2;
  //       const centerY = (top + bottom) / 2;
  //       const r = Math.min(right - left, bottom - top) / 2;

  //       ctx.beginPath();
  //       ctx.lineWidth = width || 2;
  //       ctx.strokeStyle = color || 'rgba(255, 128, 0, 0.5)';
  //       ctx.arc(centerX, centerY, r - radiusDecrease || 0, 0, 2 * Math.PI);
  //       ctx.stroke();
  //     }
  //   }
  // };

  const doughnutConfig = {
    type: 'doughnut',
    data: doughnutInitialData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Institution Level'
        }
      }
    }
    // plugins: [plugin]
  };

  const barConfig = {
    type: 'bar',
    data: barInitialData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top'
        },
        title: {
          display: true,
          text: 'Attendance Dashboard'
        }
      }
    }
    // plugins: [plugin]
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div>
        <div className="flex justify-end mb-4">
        <span className="font-bold text-sm text-primary flex justify-center items-center mx-1">
            Dashboard Type :{' '}
          </span>
          <div onClick={() => setIsChartOpen((prev) => !prev)}>
            {isChartOpen ? (
              <FcComboChart title="Click to Table" className="flex  text-3xl font-bold cursor-pointer" size={30} />
            ) : (
              <ImTable
                title="Click to Chart"
                className="flex  text-3xl font-bold cursor-pointer "
                color="gray"
                size={30}
              />
            )}
          </div>
        </div>
        {isChartOpen ? (
          Object.keys(jsonData[0])[0] === 'dept' ? (
            <InstaTable data={jsonData} />
          ) : (
            <StuTable data={jsonData} />
          ) 
        ) : (
          <>
            <span className="flex sm:block w-full gap-2">
              <div className="h-72 w-[40%] center">
                {jsonData.length === 0 ? (
                  <ChartLoaders.ChartLoader />
                ) : (
                  <Doughnut data={doughnutConfig.data} options={doughnutConfig.options} />
                )}
              </div>
              <div className="h-72 w-[60%]">
                {jsonData.length === 0 ? (
                  <ChartLoaders.BarChart />
                ) : (
                  <Bar data={barConfig.data} options={barConfig.options} />
                )}
              </div>
            </span>
          </>
        )}
      </div>
    </div>
  );
}

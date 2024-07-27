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
// import { ImTable } from 'react-icons/im';
// import { FcComboChart } from 'react-icons/fc';
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
  const programmes = jsonData.map((val) =>
    val.isinst
      ? val.deptshortname ?? val.dept.substring(0, 6)
      : val.programmeshortname ?? val.deptshortname ?? val.dept.substring(0, 6)
  );

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

  const totalCurneByProgram = (shortname) => {
    return jsonData
      .filter((programme) => programme.programmeshortname === shortname)
      .flatMap((programme) => programme.batchData.map((batch) => batch.curne))
      .reduce((total, absent) => total + absent, 0);
  };

  const totalCurneData = programmes.map((shortname) => totalCurneByProgram(shortname));
  console.log(totalCurneData,"cur2545");
 
  const instaPreData = jsonData.map((e) => e.currentpresent);
  const instaAbsData = jsonData.map((e) => e.currentabsent);
  const CURNE = jsonData.map((e) => e.curne);
  console.log(CURNE, 'DATA');

  let presentData;
  let absentData;
  let curneData;

  if (jsonData && jsonData.length > 0 && Object.keys(jsonData[0])[0] === 'dept') {
    presentData = instaPreData;
    absentData = instaAbsData;
    curneData = CURNE;
  } else {
    presentData = currentPresentData;
    absentData = currentAbsentData;
    curneData =  totalCurneData // Ensure totalCurneData is defined and has the expected values
  }

  console.log(curneData, 'nedata');

  const barInitialData = {
    labels: programmes,
    datasets: [
      {
        label: 'Present',
        data: presentData,
        borderColor: '#66cdaa',
        backgroundColor: '#3cb371',
        borderWidth: 2,
        // borderRadius: 10,
        borderSkipped: false
      },
      {
        label: 'Absent',
        data: absentData,
        borderColor: '#ff7f7f',
        backgroundColor: '#f55d5d',
        borderWidth: 2,
        // borderRadius: 10,
        borderSkipped: false
      },
      {
        label: 'NE',
        data: curneData,
        borderColor: 'rgb(255, 205, 86)',
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderWidth: 2,
        // borderRadius: 10,
        borderSkipped: false
      }
    ]
  };

  const curDayPreAvg = jsonData.map((e) => (e.currentpresent ? e.currentpresent : 0));
  const curDayAbsAvg = jsonData.map((e) => (e.currentabsent ? e.currentabsent : 0));
  const overAllTotal = jsonData.map((e) => e.stulength).reduce((a, c) => a + c, 0);
  const neData = jsonData.map((e) => e.curne).reduce((a, c) => a + c, 0);
  console.log(neData,"ne");

  const data1 = [];
  const data2 = [];
  const data3 = []

  if (curDayPreAvg.length > 0 && curDayAbsAvg.length > 0) {
    const preTotal = ((curDayPreAvg.reduce((a, c) => a + c, 0) / overAllTotal) * 100).toFixed(2);
    const absTotal = overAllTotal - curDayPreAvg.reduce((a, c) => a + c, 0) - neData
    const abs = ((absTotal / overAllTotal) * 100).toFixed(2);
    const neabs = (neData / overAllTotal *100).toFixed(2);

    data1.push(preTotal);
    data2.push(abs);
    data3.push(neabs)

    // console.log(`Total - Present : ${preTotal} Absent : ${absTotal} Abs : ${abs}`);
  }

  const doughnutInitialData = {
    labels: ['Present', 'Absent', 'NE'],
    datasets: [
      {
        label: 'Total Count',
        data: [data1, data2, data3],
        borderColor: ['#66cdaa', '#ff7f7f', 'rgb(255, 205, 86)'],
        backgroundColor: ['#3cb371', '#f55d5d', 'rgba(255, 205, 86, 0.2)'],
        borderWidth: 2,
        // borderRadius: 10,
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
      layout: {
        padding: 15
      },
      plugins: {
        legend: {
          position: 'bottom'
        }
        // title: {
        //   display: true,
        //   text: 'Institution Level'
        // }
      },
      maintainAspectRatio: true
    }
    // plugins: [plugin]
  };

  const barConfig = {
    type: 'bar',
    data: barInitialData,
    options: {
      layout: {
        padding: 15
      },
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
        // title: {
        //   display: true,
        //   text: 'Attendance Dashboard'
        // }
      },
      scales: {
        x: {
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: true
          }
          // suggestedMin: 1,
          // suggestedMax: 100
        }
      }
    }
    // plugins: [plugin]
  };

  return (
    <div className="mx-3 mt-2">
    {sessionStorage.role === 'staff' ? null : (
      <>
        <div className="w-full flex justify-between items-center border-b-2 pb-2 border-[#dedede]">
          <div className="block">
            <p className="text-lg font-semibold text-primary">
              Attendance Status On : {jsonData?.[0]?.currentdate || null}
            </p>
            {/* <p className="text-[10px] text sm:ml-4">Last Updated : {Util.getFormatDateTime(serverTime)}</p> */}
          </div>
          <div className=" block">
            <div className="flex justify-center items-center">
              <span className="font-bold text-[11px] text-primary">View By :</span>
              <div className="ml-2 flex justify-between items-center gap-1 border border-[#dedede] rounded-md ">
                <button
                  className={`text-[11px] text-text-color px-2 py-1 ${isChartOpen ? null : ' bg-loginbg rounded-l text-white'}`}
                  // className="p-1  text-tiny cursor-pointer border px-2 rounded bg-primary text-white hover:bg-white hover:text-primary hover:border-primary"
                  onClick={() => setIsChartOpen(false)}>
                  Chart
                </button>
                <button
                  className={`text-[11px] text-text-color px-2 py-1 ${jsonData.length ? 'cursor-pointer' : 'cursor-not-allowed'} ${isChartOpen ? ' bg-loginbg rounded-r text-white' : null}`}
                  // className={`p-1 text-tiny text-text-color ${jsonData.length ? 'cursor-pointer' : 'cursor-not-allowed'} border px-2 rounded bg-primary text-white hover:bg-white hover:text-primary hover:border-primary`}
                  onClick={() => setIsChartOpen(true)}
                  disabled={jsonData.length === 0}>
                  Table
                </button>
              </div>
            </div>
          </div>
        </div>
        {isChartOpen ? (
          <div className=" flex justify-between">
            <span className="text-[10px] font-bold sm:ml-4 text-alert-color-text">
              Attendance for UG & PG Courses only
            </span>
            <span className="text-[10px] font-bold sm:ml-4 text-alert-color-text">NE - Attendence Not Entered</span>
          </div>
        ) : null}
        {isChartOpen ? (
          Object.keys(jsonData[0])[0] === 'dept' ? (
            <InstaTable data={jsonData} />
          ) : (
            <StuTable data={jsonData} />
          )
        ) : (
          <>
            <div className="rounded-md my-2 flex sm:block smmd:block gap-2">
              <div className="border border-l-4 border-solid border-primary p-2 rounded-md w-[25%] sm:w-full smmd:w-full sm:mb-2 h-[55vh] md:h-[30vh]">
                {jsonData && jsonData[0] && Object.keys(jsonData[0])[0] === 'dept' ? (
                  <p className="w-full text-primary font-bold text-sm border-b border-[#dedede] pb-1 ">
                    Overall Institution
                  </p>
                ) : (
                  <p className="w-full text-primary font-bold text-sm border-b border-[#dedede] pb-1 ">
                    Overall Department
                  </p>
                )}
                {jsonData.length === 0 ? (
                  <div className="flex justify-center items-center w-full h-full px-5">
                    <ChartLoaders.TextLoading />
                  </div>
                ) : (
                  <Doughnut data={doughnutConfig.data} options={doughnutConfig.options} />
                )}
              </div>
              <div className=" border border-l-4 border-solid border-primary p-2 rounded-md w-[75%] sm:w-full smmd:w-full mx-auto h-[55vh] md:h-[30vh]">
                {jsonData && jsonData[0] && Object.keys(jsonData[0])[0] === 'dept' ? (
                  <p className="w-full text-primary font-bold text-sm border-b border-[#dedede] pb-1 ">
                    Department Wise
                  </p>
                ) : (
                  <p className="w-full text-primary font-bold text-sm border-b border-[#dedede] pb-1 ">
                    Programme Wise
                  </p>
                )}
                {jsonData.length === 0 ? (
                  <div className="flex justify-center items-center w-full h-full px-5">
                    <ChartLoaders.TextLoading />
                  </div>
                ) : (
                  <Bar data={barConfig.data} options={barConfig.options} />
                )}
              </div>
            </div>
          </>
        )}
      </>
    )}
  </div>
  );
}

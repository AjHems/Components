import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

// interface ChartTwoState {
//   series: {
//     name: string;
//     data: number[];
//   }[];
// }

const ChartTwo = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Present",
        data: [44, 55, 41, 67, 22, 43, 65],
      },
      {
        name: "Absent",
        data: [13, 23, 20, 8, 13, 27, 15],
      },
    ],
  });

  const options = {
    colors: ["#AFD198", "#FA7070"],
    chart: { 
      fontFamily: "Satoshi, sans-serif",
      type: "bar",
      height: 335,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1536,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 0,
              columnWidth: "25%",
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "B.Sc AI And ML",
        "B.Sc DS",
        "B. Sc. CS",
        "BCA",
        "B.Sc. IT",
        "M.Sc. CS",
        "MCA",
      ],
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Satoshi",
      fontWeight: 500,
      fontSize: "14px",
      markers: {
        radius: 99,
      },
      
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white p-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
      <div className="mb-4 justify-between gap-4 sm:flex">
        <div>
          <h4 className="text-xl font-semibold text-black dark:text-white">
            Student's Attendance Chart
          </h4>
        </div>
      </div>

      <div>
        <div id="chartTwo" className="-ml-5 -mb-10">
          <ReactApexChart
            options={options}
            series={state.series}
            type="bar"
            height={450}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartTwo;

import React from "react";
import Chart from "chart.js";

export default function CardLineChart() {

  React.useEffect(() => {
    var config = {
      type:"pie",
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October", "November","December"
        ],
        datasets: [
          {
            label: "MRS",
            backgroundColor: "#3182ce",
            borderColor: "#3182ce",
            data: [0, 0, 66,22],
            fill: false,
          },  {
            label: "PO",
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: [12, 21, 67, 75 , 44, 56, 67, 75,65, 78, 66,  65, 78, 66],
            fill: false,
          },  {
            label: "MIN",
            backgroundColor: "#ed64a6",
            borderColor: "#ed64a6",
            data: [ 0,0, 44,65, 78, 66, 44, 56, 67, 75, 67, 75 , 65, 78],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "OVERALL CHART",
          fontColor: "#878a99",
        },
        legend: {
          labels: {
            fontColor: "#878a99",
          },
          align: "end",
          position: "bottom",
        },

        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "#878a99",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "red",
              },
              gridLines: {
                display: false,
                borderDash: [8],
                borderDashOffset: [8],
                color: "#878a99",
                zeroLineColor: "#878a99",
                zeroLineBorderDash: [8],
                zeroLineBorderDashOffset: [8],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "#878a99",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [6],
                borderDashOffset: [6],
                drawBorder: false,
                color: "#878a99",
                zeroLineColor: "#878a99",
                zeroLineBorderDash: [10],
                zeroLineBorderDashOffset: [10],
              },
            },
          ],
        },
      },
    };
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full  h-full mb-6 shadow-lg rounded bg-gradient-to-br  from-gray-100 via-gray-200 to-gray-300">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full items-center justify-center flex-grow flex-1">


              <h2 className="uppercase text-text-color mb-1 text-xs font-semibold">
              CUrrent YEAR STATUS
              </h2>


            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-full">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
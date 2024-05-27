import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chartjs = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: ['Sales','Hello'],
        data: [10, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(100, 192, 192, 0.6)',
        borderColor:'rgba(0, 0, 0, 10)'
      },
    ],
  };

  const options = {
    colors: ["#AFD198", "#FA7070"],
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Students ',
      },
    },
  };

  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Chartjs;

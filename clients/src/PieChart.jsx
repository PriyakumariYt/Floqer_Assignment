import React from 'react';
import { Pie } from 'react-chartjs-2';
import { salaryData } from './Data';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const PieChart = () => {
  const years = salaryData.map((data) => data.year);
  const totalJobs = salaryData.map((data) => data.totalJobs);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Total Jobs',
        data: totalJobs,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'white',
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: 'Total Jobs Distribution from 2020 to 2024',
        color: 'white',
        font: {
          size: 20,
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

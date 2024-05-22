import React from 'react';
import { Line } from 'react-chartjs-2';
import { salaryData } from './Data';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const SalaryGraph = () => {
  const years = salaryData.map(data => data.year);
  const totalJobs = salaryData.map(data => data.totalJobs);
  const averageSalaries = salaryData.map(data => data.averageSalary);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Total Jobs',
        data: totalJobs,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
        color: 'white',
      },
      {
        label: 'Average Salary ($)',
        data: averageSalaries,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        fill: false,
        color: 'white',
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
        text: 'Total Jobs and Average Salary from 2020 to 2024',
        color: 'white', 
        
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', 
          font: {
            size: 14,
          },
        },
      },
      x: {
        ticks: {
          color: 'white',
          font: {
            size: 14,
          }, 
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default SalaryGraph;

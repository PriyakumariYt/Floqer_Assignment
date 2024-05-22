import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { salaryData } from './Data';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const years = salaryData.map((data) => data.year);
  const totalJobs = salaryData.map((data) => data.totalJobs);

  const data = {
    labels: years,
    datasets: [
      {
        label: 'Total Jobs',
        data: totalJobs,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)', 
          'rgba(54, 162, 235, 0.6)',  
          'rgba(255, 206, 86, 0.6)',  
          'rgba(75, 192, 192, 0.6)',  
          'rgba(153, 102, 255, 0.6)', 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',  
          'rgba(54, 162, 235, 1)',  
          'rgba(255, 206, 86, 1)',  
          'rgba(75, 192, 192, 1)',  
          'rgba(153, 102, 255, 1)', 
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
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;

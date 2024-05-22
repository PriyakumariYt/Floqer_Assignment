
import React, { useState } from 'react';

import { salaryData } from './Data';

const MainTable = () => {
  return (
    <table className="main-table">
    <caption>ML Engineer Salaries from 2020 to 2024</caption>
    <thead>
      <tr>
        <th>Year</th>
        <th>Number of Total Jobs</th>
        <th>Average Salary (USD)</th>
      </tr>
    </thead>
    <tbody>
      {salaryData.map((item) => (
        <tr key={item.year}>
          <td>{item.year}</td>
          <td>{item.totalJobs}</td>
          <td>{item.averageSalary}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default MainTable;

import MainTable from './MainTable';
import './App.css'
import SalaryGraph from './SalaryGraph';
import PieChart from './PieChart';
import DoughnutChart from './DoughnutChart';
function App() {
return (
    <>
   <div className="App">
      <header className="App-header">
        <h2>ML Engineer Salaries</h2>
        <MainTable />
        </header>
      <div className="graph-container">
        <SalaryGraph />
      </div>
      <div className="pie-container">
      <PieChart/>
      </div>
      <div className="DoughnutChart-container">
      <DoughnutChart/>
      </div>
    </div>
    </>
  )
}

export default App;

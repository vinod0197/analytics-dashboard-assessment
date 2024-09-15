import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts'; // Import LineChart and Line
import './EVDashboard.css';

const EVDashboard = () => {
  const [evData, setEvData] = useState([]);

  useEffect(() => {
    fetch('/Electric_Vehicle_Population_Data.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            setEvData(results.data);
          },
        });
      })
      .catch(error => console.error("Error loading CSV file: ", error));
  }, []);

  const formattedData = evData.map(item => ({
    year: item.Year,
    population: parseInt(item.EVPopulation, 10),
  }));

  return (
    <div className="dashboard-container">
      <h1>Electric Vehicle Dashboard</h1>

      {/* Bar Chart Heading */}
      <h2>EV Population Bar Chart</h2>
      <div className="chart-container">
        <BarChart width={600} height={300} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="population" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Line Chart Heading */}
      <h2>EV Population Line Chart</h2>
      <div className="chart-container">
        <LineChart width={600} height={300} data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="population" stroke="#82ca9d" />
        </LineChart>
      </div>

      {/* Add more interactive elements or charts here */}
      <button className="button">Explore More Data</button>
    </div>
  );
};

export default EVDashboard;

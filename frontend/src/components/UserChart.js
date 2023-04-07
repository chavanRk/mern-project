import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

const UserChart = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/user-chart-data');
      const chartData = {
        labels: result.data.labels,
        datasets: result.data.datasets,
      };
      setChartData(chartData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setChartOptions({
      responsive: true,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              precision: 0,
            },
          },
        ],
      },
    });
  }, []);

  return (
    <div>
      <h2>User Chart</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default UserChart;

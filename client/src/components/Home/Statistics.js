import React from "react";
import Chart from 'chart.js/auto';

export default function Statistics(){

  const data = [3, 6, 3, 5, 4, 5]
  const labels = ['January', 'Febuary', 'March', 'April', 'May', 'June']

  new Chart("myChart", {
    type: 'bar',
    data: {
      datasets: [{
        label: "Cups of bubble tea", 
        pointRadius: 6,
        backgroundColor: '#eb9347',
        data: data
      }],
      labels: labels,
    },
    options: {
      plugins: {
        legend: {
          display: true,
        }
      }
    }
  });

  return (
    <div className="col-11 shadow rounded px-5 py-4 mt-4">
      <canvas id="myChart" style={{width: '100%', minWidth:'300px'}}></canvas>
    </div>
  )
}
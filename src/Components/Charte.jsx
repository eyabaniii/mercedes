import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Prix des voitures ',
    },
  },
};

const labels = ["5000DT" ,"10000DT","15000DT","25000DT","30000DT","35000DT","40000DT"];
export const data = {
  labels,
  datasets: [
    {
      label: 'Prix par rapport au voitures',
      data: [100,500,300,750,150,1000,250],
      backgroundColor: 'red',
    }
  ],
};

export function Charte() {
  return (
<div className="charte"><Bar options={options} data={data} /></div>

  ) 
}

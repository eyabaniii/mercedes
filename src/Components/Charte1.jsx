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
  indexAxis: 'y' ,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'kilometrages des voitures',
    },
  },
};

const labels = ['>300,000KM', '250,000-300,000KM', '200,000-250,000KM', '150,000-200,000KM', '100,000-150,000KM',"<100,000KM"];

export const data = {
  labels,
  datasets: [

      
    {
      label: 'Kilometrage par rapport  au voitures',
      data:[100,400,200,600,300,500] ,
    
      backgroundColor: 'green',
    },
  ],
};

export function Charte1() {
  return(
  <div className="charte">  <Bar options={options} data={data} /></div>
  )
}

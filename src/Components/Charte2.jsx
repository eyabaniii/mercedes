import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
      text: 'Ages des voitures',
    },
  },
};

const labels = ["1-2ans","3-5ans","6-9ans","10-15ans","15-20ans","20-25ans",">26ans"  ];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Anneés par rapport au voitures',
      data: [200,700,300,550,150,100,450],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function Charte2() {
  return (
     <div className="charte"> <Line options={options} data={data} /></div>
    )
  
 
}
import React, {useState} from 'react'
import s from "./Chart.module.css"
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  registerables,
} from 'chart.js';
import {Chart} from 'react-chartjs-2';
import {ChartModelType} from "../App";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  ...registerables
);

type propsType = {
  data: ChartModelType[]
}

const Charter: React.FC<propsType> = props => {

  const {
    data
  } = props

  let labels = data.map(item => item.campaign)

  let barsOne = data.map(item => item.clicks)

  let barsTwo = data.map(item => item.spend)


  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  const dataMain = {
    labels,
    datasets: [
      {
        type: 'bar' as const,
        label: 'Clicks',
        data: barsOne,
        backgroundColor: 'rgb(130, 30, 30)',
        borderColor: 'rgb(130, 30, 30)',
        yAxisID: 'y',
        pointRadius: 0,
      },
      {
        type: 'bar' as const,
        label: 'Spend $',
        data: barsTwo,
        backgroundColor: 'rgb(30, 130, 30)',
        borderColor: 'rgb(30, 130, 30)',
        yAxisID: 'y1',

      },
    ],
  };

  // const [hoverChart, setHoverChart] = useState<boolean>(false)

  return (
      <div
          className={`${s.chartBody}`}
      >
        <Chart type='bar' data={dataMain} options={options}/>
      </div>
  )
}

export default Charter
import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';





const urlv1gm = 'http://localhost:8080/v1gm'
const urlv1nm = 'http://localhost:8080/v1nm'






export default function V1() {

  const [v1gm, setv1gm] = useState([])
  const [v1nm, setv1nm] = useState([])

  useEffect(() => {
    axios.get(urlv1gm)
      .then((response) => {
        console.log(response.data)
        setv1gm(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1nm)
      .then((response) => {
        console.log(response.data)
        setv1nm(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])

  const v1 = {
    labels: v1gm.map(d => d.time),
    datasets: [
      {
        label: 'Time',
        backgroundColor: 'rgba(75,192,0,1)',
        borderColor: 'rgba(0,0,0,255)',
        borderWidth: 1,
        data: v1gm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Time',
        backgroundColor: 'rgba(75,192,0,1)',
        borderColor: 'rgba(230,210,324,0)',
        borderWidth: 1,
        data: v1nm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      }
    ]
  }
  const options = {
    type:'line',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies from January 1850 onwards monthly",
      },
    },
    scales: {
      y: { min: -3, max: 3 },
      x: { type: 'time' }
    },
  }








  return (
    <div>
      <Line options={options} data={v1} />
    </div>
  )
}
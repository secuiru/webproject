import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv6 = 'http://localhost:8080/v6'





export default function V6() {


  const [v6, setv6] = useState([])

  useEffect(() => {
    axios.get(urlv6)
      .then((response) => {
        console.log(response.data)
        setv6(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])



  const v6chart = {
    labels: v6.map(d => d.time),
    datasets: [
      {
        label: 'V6',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v6,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'co2'
        }
      }
    ]
  }

  const options = {
    scales: {
      x: { reverse: true }
    },
    type: 'line',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "V6",
      },
    },

  }


  return (
    <div>
      <Line options={options} data={v6chart} />


    </div>
  )
}
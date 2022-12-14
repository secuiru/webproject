import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv5 = 'http://localhost:8080/v5'





export default function V5() {


  const [v5, setv5] = useState([])

  useEffect(() => {
    axios.get(urlv5)
      .then((response) => {
        console.log(response.data)
        setv5(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])



  const v5chart = {
    labels: v5.map(d => d.yrbp),
    datasets: [
      {
        label: 'Carbon dioxide from Vostok ice core',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v5,
        spanGaps: false,
        parsing: {
          xAxisKey: 'yrbp',
          yAxisKey: 'co2'
        }
      }
    ]
  }

  const options = {
    type: 'line',
    scales: {
      x: { reverse: true }
    },
    pointRadius: 1,
    pointHoverRadius: 1,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vostok Ice Core CO2 measurements",
      },
    },

  }


  return (
    <div class="linkki1" style={{ maxWidth: '1500px' }}>
      <Line options={options} data={v5chart} />
      <p> Carbon dioxide levels from the ice from Vostok. from years 413085BC-2342BC</p>
      <p >  <a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2"> Datasets</a> </p>
      <p > <a href="https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html"> More info</a> </p>

    </div>
  )
}
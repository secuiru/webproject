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
        label: 'CO2',
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
    pointRadius: 1,
pointHoverRadius: 1,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },

      title: {
        display: true,
        text: "Ice core 800k year composite study CO2 measurements",
      },
    },

  }


  return (
    <div class="linkki1" style={{maxWidth:'1500px'}}>
      <Line options={options} data={v6chart} />
      <p> Ice composition from Antarctica over  800 thousand years </p>
      <p > <a href="https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt"> Dataset</a> </p>
      <p ><a href="https://www.ncei.noaa.gov/access/paleo-search/study/17975"> More info</a> </p>
 

    </div>
  )
}
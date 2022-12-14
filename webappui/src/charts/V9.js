import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';
import { Chart as ChartJS } from "chart.js/auto"






const urlv9 = 'http://localhost:8080/v9'





export default function V9() {


  const [v9, setv9] = useState([])

  useEffect(() => {
    axios.get(urlv9)
      .then((response) => {
        console.log(response.data)
        setv9(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])



  const v9chart = {
    labels: v9.map(d => d.name),
    datasets: [
      {

        label: 'V9',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 2,
        data: v9.map(d => d.values),
        parsing: {
          yAxisKey: 'values',
        },
        spanGaps: false,

      }
    ]
  }
  const options = {
    type: 'line',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global emissions",
      },
    },
  }
  return (
    <div class="linkki1" style={{ maxWidth: '1500px' }}>
      <Doughnut options={options} data={v9chart} />
      <p> Global emissions by sectors</p>
      <p ><a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx"> Dataset</a> </p>
      <p ><a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector"> More info</a> </p>

    </div>
  )
}
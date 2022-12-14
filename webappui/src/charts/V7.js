import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv750 = 'http://localhost:8080/v7ppm'
const urlv7ppm = 'http://localhost:8080/v750'





export default function V7() {


  const [v750, setv750] = useState([])
  const [v7ppm, setv7ppm] = useState([])
  const [v10, setv10] = useState([])

  useEffect(() => {
    axios.get(urlv750)
      .then((response) => {
        console.log(response.data)
        setv750(response.data)
      }).catch(error => {
        console.log(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv7ppm)
      .then((response) => {
        console.log(response.data)
        setv7ppm(response.data)
      }).catch(error => {
        console.log(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8080/v10')
      .then((response) => {
        console.log(response.data)
        setv10(response.data)
      }).catch(error => {
        console.log("virhe v10")
      })
  }, [])

  const v7chart = {
    labels: v7ppm.map(d => d.time),

    datasets: [

      {
        label: 'CO2 ppm',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v7ppm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'fifty'
        },
        "yAxisID": 'y'
      },
      {
        label: 'Temperature',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v750,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'ppm',
        },
        "yAxisID": 'y1'
      },
      {
        label: 'History',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(0,0,0,0)',
        borderWidth: 2,
        data: v10,
        spanGaps: false,
        pointRadius: 2,
        pointHoverRadius: 7,

        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'y',


        },


        "yAxisID": 'y1'

      },
    ]
  }

  const tooltip = {
    yAlign: 'bottom',
    callbacks: {
      title: function (chart) {
        /*         console.log(chart[0].dataset.data)
                console.log(chart[0].dataIndex) */
        const year = chart[0].dataset.data[chart[0].dataIndex].time
        return year;
      },
      label: function (context) {
        /* console.log(context.dataset.data) */
        const happening = context.dataset.data[context.dataIndex].info

        return happening;
      }
    }
  }

  const options = {
    type: 'line',
    pointRadius: 1,
    pointHoverRadius: 1,
    responsive: true,
    interaction: {
      mode: 'nearest',
      intersect: true,
    },
    stacked: false,
    plugins: {
      tooltip,
    },

    scales: {
      x: {
        type: "linear",
        max: 2022,
        title: {
          display: true,
          text: "time in years",
        },
      },
      y1: {
        type: 'linear',
        title: {
          display: true,
          position: 'left',
          text: 'CO2 ppm'
        },
      },

      y: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Temperature anomaly'
        },
        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    }
  }
  return (
    <div class="linkki1" style={{ maxWidth: '1500px' }}>
      <Line options={options} data={v7chart} />
      <p> Evolution of global temperature over the past two million years </p>
      <p > <a href="http://carolynsnyder.com/publications.php">Dataset</a> </p>
      <p ><a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf"> More info</a> </p>

    </div >
  )
}
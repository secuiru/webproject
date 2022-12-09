import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv7 = 'http://localhost:8080/v7'
const urlv7c = 'http://localhost:8080/v7c'
const urlv7t = 'http://localhost:8080/v7t'





export default function V7() {


  const [v7, setv7] = useState([])
  const [v7c, setv7c] = useState([])
  const [v7t, setv7t] = useState([])

  useEffect(() => {
    axios.get(urlv7)
      .then((response) => {
        console.log(response.data)
        setv7(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv7c)
      .then((response) => {
        console.log(response.data)
        setv7c(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv7t)
      .then((response) => {
        console.log(response.data)
        setv7t(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  const v7chart = {
    labels: v7c.map(d => d.timeyrbp),

    datasets: [
      {
        label: 'V7',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v7,
        spanGaps: false,
        parsing: {
          xAxisKey: 'timekyrbp',
          yAxisKey: 'fiftypercenct'
        }
      },
      {
        label: 'V7c',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v7c,
        spanGaps: false,
        parsing: {
          xAxisKey: 'timeyrbp',
          yAxisKey: 'onesdppm'
        }
      },
      {
        label: 'V7t',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v7t,
        spanGaps: false,
        parsing: {
          xAxisKey: 'timeyrbp',
          yAxisKey: 'antarctictermpuncertainty',

        }
      },

    ]
  }

  const options = {
    type: 'line',
    responsive: true,
    interaction: {
      intersect: false,
    },
    stacked: false,
    plugins: {},
    legend: {


    },
    scales: {
        yAxes: [{
          id: 'A',
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          type: 'linear',
          position: 'right',
          ticks: {
            max: 1,
            min: 0
          }
        }],
      


        x: {
          type: "linear",
          max: 2022,
          title: {
            display: true,
            text: "time in years",
          },




          carbondioxideppm: {
            position: "left",
            display: true,

          },

          antarctictempchange: {
            position: "right",
            display: true,

          },
        },



      },




    }


  return(
    <div>
{/*     <Line options={options} data={v7chart} /> */}
    <h2>There was error getting the v7, please try again later</h2>


    </div >
  )
}
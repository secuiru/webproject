import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';





const urlv1a = 'http://localhost:8080/v1a'
const urlv1m = 'http://localhost:8080/v1m'

const urlv2 = 'http://localhost:8080/v2'





export default function V1() {

  const [v1a, setv1a] = useState([])
  const [v1m, setv1m] = useState([])

  const [v2, setv2] = useState([])

  useEffect(() => {
    axios.get(urlv1a)
      .then((response) => {
        console.log(response.data)
        setv1a(response.data)
      }).catch(error => {
        alert("error from v1a")
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1m)
      .then((response) => {
        console.log(response.data)
        setv1m(response.data)
      }).catch(error => {
        alert("error from v1m")
      })
  }, [])
  useEffect(() => {
    axios.get(urlv2)
      .then((response) => {
        console.log(response.data)
        setv2(response.data)
        console.log(v2)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])

  const v1 = {
    labels: v1a.map(d => d.time),
    datasets: [
      {
        label: 'Global (NH+SH)/2 monthly',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v1m,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'gm'
        }
      },
      {
        label: 'Northern hemisphere monthly',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(0,255,0,1)',
        borderWidth: 2,
        data: v1m,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'nm'
        }
      },
      {
        label: 'Southern hemisphere monthly',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v1m,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'sm'
        }
      },
      {
        label: 'Global (NH+SH)/2 yearly',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v1a,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'ga'
        }
      },
      {
        label: 'Northern hemisphere yearly',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(0,255,0,1)',
        borderWidth: 2,
        data: v1a,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'na'
        }
      },
      {
        label: 'Southern hemisphere yearly',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v1a,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'sa'
        }
      },
      {
        label: '2000 year temps',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v2,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 't'
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

      x: {type: 'time'}
    },
  }

  


  return (
    <div>
      <Line options={options} data={v1} />

    </div>
  )
}
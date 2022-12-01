import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';





const urlv1gm = 'http://localhost:8080/v1gm'
const urlv1nm = 'http://localhost:8080/v1nm'
const urlv1sm = 'http://localhost:8080/v1sm'
const urlv1ga = 'http://localhost:8080/v1ga'
const urlv1na = 'http://localhost:8080/v1na'
const urlv1sa = 'http://localhost:8080/v1sa'
const urlv2 = 'http://localhost:8080/v2'





export default function V1() {

  const [v1gm, setv1gm] = useState([])
  const [v1nm, setv1nm] = useState([])
  const [v1sm, setv1sm] = useState([])
  const [v1ga, setv1ga] = useState([])
  const [v1na, setv1na] = useState([])
  const [v1sa, setv1sa] = useState([])
  const [v2, setv2] = useState([])

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
  useEffect(() => {
    axios.get(urlv1sm)
      .then((response) => {
        console.log(response.data)
        setv1sm(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1gm)
      .then((response) => {
        console.log(response.data)
        setv1ga(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1na)
      .then((response) => {
        console.log(response.data)
        setv1na(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1sa)
      .then((response) => {
        console.log(response.data)
        setv1sa(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
  useEffect(() => {
    axios.get(urlv1ga)
      .then((response) => {
        console.log(response.data)
        setv2(response.data)
      }).catch(error => {
        alert(error.response.error)
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
    labels: v1ga.map(d => d.time),
    datasets: [
      {
        label: 'Global (NH+SH)/2 monthly',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v1gm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Northern hemisphere monthly',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(0,255,0,1)',
        borderWidth: 2,
        data: v1nm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Southern hemisphere monthly',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v1sm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Global (NH+SH)/2 yearly',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v1ga,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Northern hemisphere yearly',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(0,255,0,1)',
        borderWidth: 2,
        data: v1na,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Southern hemisphere yearly',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(0,0,255,1)',
        borderWidth: 2,
        data: v1sa,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
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

    },
  }

  


  return (
    <div>
      <Line options={options} data={v1} />

    </div>
  )
}
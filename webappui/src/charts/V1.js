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





export default function V1() {

  const [v1gm, setv1gm] = useState([])
  const [v1nm, setv1nm] = useState([])
  const [v1sm, setv1sm] = useState([])
  const [v1ga, setv1ga] = useState([])
  const [v1na, setv1na] = useState([])
  const [v1sa, setv1sa] = useState([])

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

  const v1m = {
    labels: v1gm.map(d => d.time),
    datasets: [
      {
        label: 'Global (NH+SH)/2',
        backgroundColor: 'rgba(255,0,0,1)',
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
        label: 'Northern hemisphere',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(230,210,324,0)',
        borderWidth: 1,
        data: v1nm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Southern hemisphere',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(100,50,30,25)',
        borderWidth: 1,
        data: v1sm,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      }
    ]
  }
  const optionsm = {
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
      x: { type: 'time' }
    },
  }

  const v1a = {
    labels: v1ga.map(d => d.time),
    datasets: [
      {
        label: 'Global (NH+SH)/2',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(0,0,0,255)',
        borderWidth: 1,
        data: v1ga,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Northern hemisphere',
        backgroundColor: 'rgba(0,255,0,1)',
        borderColor: 'rgba(230,210,324,0)',
        borderWidth: 1,
        data: v1na,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      },
      {
        label: 'Southern hemisphere',
        backgroundColor: 'rgba(0,0,255,1)',
        borderColor: 'rgba(100,50,30,25)',
        borderWidth: 1,
        data: v1sa,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'anomalydeg'
        }
      }
    ]
  }
  const optionsa = {
    type:'line',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies from January 1850 onwards yearly",
      },
    },
    scales: {
   
      x: { type: 'time' }
    },
  }








  return (
    <div>
      <Line options={optionsm} data={v1m} />
      <Line options={optionsa} data={v1a} />
    </div>
  )
}
import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv2 = 'http://localhost:8080/v2'



export default function V2() {


  const [v2, setv2] = useState([])

  useEffect(() => {
    axios.get(urlv2)
      .then((response) => {
        console.log(response.data)
        setv2(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])


 
  const v2chart = {
    labels: v2.map(d => d.time),
    datasets: [
      {
        label: 'V2',
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
        text: "Global historical surface temperature anomalies from January 1850 onwards",
      },
    },

  }


  return (
    <div style={{maxWidth:'1500px'}}>
      <Line options={options} data={v2chart} />


    </div>
  )
}
import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
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
        label: 'V5',
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
    type:'line',
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V5",
      },
    },

  }


  return (
    <div style={{maxWidth:'1500px'}}>
      <Line options={options} data={v5chart} />


    </div>
  )
}
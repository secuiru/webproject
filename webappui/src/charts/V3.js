import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import {Bar,Line,Pie} from "react-chartjs-2";
import{Chart as ChartJS} from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';



const urlmaunaloaco2 = 'http://localhost:8080/v3'

export default function V3() {

  const [maunaloaco2, setmaunaloaco2] = useState([])

  useEffect(() => {
    axios.get(urlmaunaloaco2)
      .then((response) => {
        console.log(response.data)
        setmaunaloaco2(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])
 

  const v3 = {
    labels: maunaloaco2.map(d => d.year),

    datasets: [
       {
        label: 'yearly',
        backgroundColor: 'rgba(75,192,0,1)',
        borderColor: 'rgba(75,192,0,1)',
        borderWidth: 2,
        data: maunaloaco2,
        spanGaps: false,
        parsing: {
          xAxisKey: 'year',
          yAxisKey: 'average'
        }
      },/*  {
        label: 'monthly',
        backgroundColor: 'rgba(75,192,0,1)',
        borderColor: 'rgba(0,0,0,255)',
        borderWidth: 1,
        data: maunaloaco2,
        spanGaps: false,
        parsing: {
          xAxisKey: 'year',
          yAxisKey: 'average'
        }
      }, */
       {
        label: 'deseasonalized',
        backgroundColor: 'rgba(75,192,255,255)',
        borderColor: 'rgba(75,192,255,255)',
        borderWidth: 2,
        data: maunaloaco2,
        spanGaps: false,
        parsing: {
          xAxisKey: 'year',
          yAxisKey: 'deseasonalized'
        }
      }, 
    ] 
  }
  const options = {
    type:'line',
    pointRadius: 1,
pointHoverRadius: 1,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Corrected seasonal CO2 levels in mauna loa ",
      },
    },
 scales: {

      x: {type: 'time'}
    } ,
}


return (
    <div>
      <div style={{maxWidth:'1500px'}}>
      <Line options={options} data={v3} />
      </div>
      <p> </p>
    </div>

  )
}
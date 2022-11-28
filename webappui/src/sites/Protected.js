import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto"



const url = 'http://localhost:8080/data'




export default function Protected(props) {

  const [data, setdata] = useState("")
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getData() {
      try {
        let response = await axios.get(url);
        console.log(data)
        setdata(response.data)
        setLoading(false);


      } catch (error) {
        console.log('error', error);
      }
    }
    getData();
  }, []);

  /* useEffect(() => {
    axios.get(url)
    .then((response)=>{
  
      //console.log(response.data)
      //csvToJSON(response.data)
      var mydatasets = [];
      var dataset=response.data;
      
      //console.log(mydatasets)
  
      setdata(response.data)
      console.log(data)
    }).catch (error=>{
      alert(error.response.data.error)
    })
  
  }, [])
   */
  const state = {
    labels: ['chartti labeli'],
    datasets: [
      {
        label: 'dbdata',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [data],
        yAxisID: "Anomaly (deg C)",
        parsing: {
          xAxisKey: "Time",
          yAxisKey: "Anomaly (deg C)"

        }
      },
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      options: {
        plugins: {
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
          }
        }
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Global historical surface temperature anomalies from January 1850 onwards monthly",
      },
    },
    scales: {
      co2: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };






  if (loading) return <p>Loading...</p>

  return (
    <div>
        <Line options={options} data={state} />
        {/* <p>data={data}</p> */}
    </div>
  )
}

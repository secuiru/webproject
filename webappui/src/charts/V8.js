import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"
import { parse } from 'papaparse';
import 'chartjs-adapter-luxon';






const urlv8 = 'http://localhost:8080/v8'





export default function V8() {


  const [v8, setv8] = useState([])

  useEffect(() => {
    axios.get(urlv8)
      .then((response) => {
        console.log(response.data)
        setv8(response.data)
      }).catch(error => {
        alert(error.response.error)
      })
  }, [])



  const v8chart = {
    labels: v8.map(d => d.time),
    datasets: [
      {
        label: 'Afghanistan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Afghanistan'

        }
      },
      {
        label: 'Albania',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Albania'

        }
      },

      {
        label: 'Algeria',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Algeria'

        }
      },
      {
        label: 'Andorra',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Andorra'

        }
      },
      {
        label: 'Angola',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Angola'

        }
      },
      {
        label: 'Anguilla',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Anguilla'

        }
      },
      {
        label: 'Antigua and Barbuda',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Antigua and Barbuda'

        }
      },

      {
        label: 'Argentina',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Argentina'

        }
      },
      {
        label: 'Armenia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Armenia'

        }
      },
      {
        label: 'Aruba',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Aruba'

        }
      },
      {
        label: 'Australia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Australia'

        }
      },

      {
        label: 'Austria',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Austria'

        }
      },
      {
        label: 'Azerbaijan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Azerbaijan'

        }
      },
      {
        label: 'Bahamas',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bahamas'

        }
      },
      {
        label: 'Bahrain',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bahrain'

        }
      },

      {
        label: 'Bangladesh',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bangladesh'

        }
      },
      {
        label: 'Barbados',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Barbados'

        }
      },
      {
        label: 'Belarus',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Belarus'

        }
      },
      {
        label: 'Belgium',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Belgium'

        }
      },

      {
        label: 'Belize',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Belize'

        }
      },
      {
        label: 'Benin',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Benin'

        }
      },
      {
        label: 'Bermuda',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bermuda'

        }
      },
      {
        label: 'Bhutan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bhutan'

        }
      },

      {
        label: 'Bonaire, Saint Eustatius and Saba',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bonaire, Saint Eustatius and Saba'

        }
      },

      {
        label: 'Bosnia and Herzegovina',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bosnia and Herzegovina'

        }
      },

      {
        label: 'Botswana',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Botswana'

        }
      },
      {
        label: 'Brazil',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Brazil'

        }
      },
      {
        label: 'British Virgin Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'British Virgin Islands'

        }
      },
      {
        label: 'Brunei Darussalam',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Brunei Darussalam'

        }
      },

      {
        label: 'Bulgaria',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bulgaria'

        }
      },
      {
        label: 'Burkina Faso',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Burkina Faso'

        }
      },
      {
        label: 'Burundi',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Burundi'

        }
      },
      {
        label: 'Cambodia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cambodia'

        }
      },
      {
        label: 'Canada',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Canada'

        }
      },

      {
        label: 'Cape Verde',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cape Verde'

        }
      },
      {
        label: 'Central African Republic',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Central African Republic'

        }
      },
      {
        label: 'Chad',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Chad'

        }
      },
      {
        label: 'Chile',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Chile'

        }
      },

      {
        label: 'China',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'China'

        }
      },
      {
        label: 'Colombia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Colombia'

        }
      },
      {
        label: 'Comoros',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Comoros'

        }
      },
      {
        label: 'Congo',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Congo'

        }
      },
      {
        label: 'Cook Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cook Islands'

        }
      },

      {
        label: 'Costa Rica',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Costa Rica'

        }
      },
      {
        label: 'Côte dIvoire',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Côte dIvoire'

        }
      },
      {
        label: 'Croatia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Croatia'

        }
      },
      {
        label: 'Cuba',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cuba'

        }
      },
      {
        label: 'Curaçao',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Curaçao'

        }
      },
      {
        label: 'Cyprus',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cyprus'

        }
      },

      {
        label: 'Czech Republic',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Czech Republic'

        }
      },
      {
        label: 'North Korea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'North Korea'

        }
      },
      {
        label: 'Democratic Republic of the Congo',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Democratic Republic of the Congo'

        }
      },
      {
        label: 'Denmark',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Denmark'

        }
      },
      {
        label: 'Djibouti',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Djibouti'

        }
      },
      {
        label: 'Dominica',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Dominica'

        }
      },

      {
        label: 'Dominican Republic',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Dominican Republic'

        }
      },
      {
        label: 'Ecuador',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Ecuador'

        }
      },
      {
        label: 'Egypt',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Egypt'

        }
      },
      {
        label: 'El Salvador',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'El Salvador'

        }
      },
      {
        label: 'Equatorial Guinea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Equatorial Guinea'

        }
      },

      {
        label: 'Eritrea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Eritrea'

        }
      },
      {
        label: 'Estonia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Estonia'

        }
      },
      {
        label: 'Ethiopia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Ethiopia'

        }
      },
      {
        label: 'Faeroe Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Faeroe Islands'

        }
      },
      {
        label: 'Micronesia (Federated States of)',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Micronesia (Federated States of)'

        }
      },

      {
        label: 'Fiji',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Fiji'

        }
      },
      {
        label: 'Finland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Finland'

        }
      },
      {
        label: 'France',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'France'

        }
      },
      {
        label: 'French Guiana',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'French Guiana'

        }
      },
      {
        label: 'French Polynesia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'French Polynesia'

        }
      },

      {
        label: 'Gabon',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Gabon'

        }
      },
      {
        label: 'Gambia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Gambia'

        }
      },
      {
        label: 'Georgia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Georgia'

        }
      },
      {
        label: 'Germany',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Germany'

        }
      },
      {
        label: 'Ghana',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Ghana'

        }
      },

      {
        label: 'Greece',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Greece'

        }
      },
      {
        label: 'Greenland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Greenland'

        }
      },
      {
        label: 'Grenada',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Grenada'

        }
      },
      {
        label: 'Guadeloupe',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Guadeloupe'

        }
      },
      {
        label: 'Guatemala',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Guatemala'

        }
      },

      {
        label: 'Guinea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Guinea'

        }
      },
      {
        label: 'Guinea-Bissau',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Guinea-Bissau'

        }
      },
      {
        label: 'Guyana',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Guyana'

        }
      },
      {
        label: 'Haiti',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Haiti'

        }
      },
      {
        label: 'Honduras',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Honduras'

        }
      },

      {
        label: 'Hong Kong',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Hong Kong'

        }
      },
      {
        label: 'Hungary',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Hungary'

        }
      },
      {
        label: 'Iceland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Iceland'

        }
      },
      {
        label: 'India',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'India'

        }
      },
      {
        label: 'Indonesia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Indonesia'

        }
      },

      {
        label: 'Iraq',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Iraq'

        }
      },
      {
        label: 'Iran',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Iran'

        }
      },
      {
        label: 'Ireland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Ireland'

        }
      },
      {
        label: 'Italy',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Italy'

        }
      },
      {
        label: 'Israel',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Israel'

        }
      },

      {
        label: 'Jamaica',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Jamaica'

        }
      },
      {
        label: 'Japan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Japan'

        }
      },
      {
        label: 'Jordan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Jordan'

        }
      },
      {
        label: 'Kazakhstan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kazakhstan'

        }
      },
      {
        label: 'Kenya',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kenya'

        }
      },

      {
        label: 'Kiribati',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kiribati'

        }
      },
      {
        label: 'Kosovo',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kosovo'

        }
      },
      {
        label: 'Kuwait',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kuwait'

        }
      },
      {
        label: 'Kyrgyzstan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Kyrgyzstan'

        }
      },
      {
        label: 'Laos',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Laos'

        }
      },

      {
        label: 'Latvia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Latvia'

        }
      },
      {
        label: 'Lebanon',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Lebanon'

        }
      },
      {
        label: 'Lesotho',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Lesotho'

        }
      },
      {
        label: 'Liberia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Liberia'

        }
      },

      {
        label: 'Libya',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Libya'

        }
      },
      {
        label: 'Liechtenstein',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Liechtenstein'

        }
      },
      {
        label: 'Lithuania',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Lithuania'

        }
      },
      {
        label: 'Luxembourg',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Luxembourg'

        }
      },
      {
        label: 'Macao',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Macao'

        }
      },

      {
        label: 'North Macedonia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'North Macedonia'

        }
      },
      {
        label: 'Madagascar',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Madagascar'

        }
      },
      {
        label: 'Malawi',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Malawi'

        }
      },
      {
        label: 'Malaysia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Malaysia'

        }
      },
      {
        label: 'Maldives',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Maldives'

        }
      },

      {
        label: 'Mali',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mali'

        }
      },
      {
        label: 'Malta',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Malta'

        }
      },
      {
        label: 'Martinique',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Martinique'

        }
      },
      {
        label: 'Marshall Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Marshall Islands'

        }
      },
      {
        label: 'Mauritania',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mauritania'

        }
      },

      {
        label: 'Mauritius',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mauritius'

        }
      },
      {
        label: 'Mayotte',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mayotte'

        }
      },
      {
        label: 'Mexico',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mexico'

        }
      },
      {
        label: 'Mongolia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mongolia'

        }
      },
      {
        label: 'Montenegro',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Montenegro'

        }
      },

      {
        label: 'Montserrat',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Montserrat'

        }
      },
      {
        label: 'Morocco',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Morocco'

        }
      },
      {
        label: 'Mozambique',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Mozambique'

        }
      },
      {
        label: 'Myanmar',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Myanmar'

        }
      },
      {
        label: 'Namibia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Namibia'

        }
      },

      {
        label: 'Nauru',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Nauru'

        }
      },
      {
        label: 'Nepal',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Nepal'

        }
      },
      {
        label: 'Netherlands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Netherlands'

        }
      },
      {
        label: 'New Caledonia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'New Caledonia'

        }
      },
      {
        label: 'New Zealand',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'New Zealand'

        }
      },

      {
        label: 'Nicaragua',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Nicaragua'

        }
      },
      {
        label: 'Niger',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Niger'

        }
      },
      {
        label: 'Nigeria',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Nigeria'

        }
      },
      {
        label: 'Niue',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Niue'

        }
      },
      {
        label: 'Norway',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Norway'

        }
      },

      {
        label: 'Occupied Palestinian Territory',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Occupied Palestinian Territory'

        }
      },
      {
        label: 'Oman',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Oman'

        }
      },
      {
        label: 'Pakistan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Pakistan'

        }
      },
      {
        label: 'Palau',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Palau'

        }
      },

      {
        label: 'Panama',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Panama'

        }
      },
      {
        label: 'Papua New Guinea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Papua New Guinea'

        }
      },
      {
        label: 'Paraguay',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Paraguay'

        }
      },
      {
        label: 'Peru',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Peru'

        }
      },
      {
        label: 'Philippines',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Philippines'

        }
      },

      {
        label: 'Bolivia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bolivia'

        }
      },
      {
        label: 'Poland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Poland'

        }
      },
      {
        label: 'Portugal',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Portugal'

        }
      },
      {
        label: 'Qatar',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Qatar'

        }
      },
      {
        label: 'Cameroon',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Cameroon'

        }
      },

      {
        label: 'South Korea',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'South Korea'

        }
      },
      {
        label: 'Moldova',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Moldova'

        }
      },
      {
        label: 'South Sudan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'South Sudan'

        }
      },
      {
        label: 'Sudan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sudan'

        }
      },
      {
        label: 'Réunion',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Réunion'

        }
      },

      {
        label: 'Romania',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Romania'

        }
      },
      {
        label: 'Russian Federation',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Russian Federation'

        }
      },
      {
        label: 'Rwanda',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Rwanda'

        }
      },
      {
        label: 'Saint Helena',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saint Helena'

        }
      },
      {
        label: 'Saint Lucia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saint Lucia'

        }
      },

      {
        label: 'Sint Maarten (Dutch part)',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sint Maarten (Dutch part)'

        }
      },
      {
        label: 'Samoa',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Samoa'

        }
      },
      {
        label: 'Sao Tome and Principe',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sao Tome and Principe'

        }
      },
      {
        label: 'Saudi Arabia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saudi Arabia'

        }
      },
      {
        label: 'Senegal',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Senegal'

        }
      },

      {
        label: 'Serbia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Serbia'

        }
      },
      {
        label: 'Seychelles',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Seychelles'

        }
      },
      {
        label: 'Sierra Leone',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sierra Leone'

        }
      },
      {
        label: 'Singapore',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Singapore'

        }
      },
      {
        label: 'Slovakia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Slovakia'

        }
      },

      {
        label: 'Slovenia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Slovenia'

        }
      },
      {
        label: 'Solomon Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Solomon Islands'

        }
      },
      {
        label: 'Somalia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Somalia'

        }
      },
      {
        label: 'South Africa',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'South Africa'

        }
      },
      {
        label: 'Spain',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Spain'

        }
      },

      {
        label: 'Sri Lanka',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sri Lanka'

        }
      },
      {
        label: 'Saint Kitts and Nevis',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saint Kitts and Nevis'

        }
      },
      {
        label: 'Saint Pierre and Miquelon',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saint Pierre and Miquelon'

        }
      },
      {
        label: 'Saint Vincent and the Grenadines',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Saint Vincent and the Grenadines'

        }
      },
      {
        label: 'Suriname',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Suriname'

        }
      },

      {
        label: 'Swaziland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Swaziland'

        }
      },
      {
        label: 'Sweden',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Sweden'

        }
      },
      {
        label: 'Switzerland',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Switzerland'

        }
      },
      {
        label: 'Syria',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Syria'

        }
      },
      {
        label: 'Taiwan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Taiwan'

        }
      },
      {
        label: 'Tajikistan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Tajikistan'

        }
      },
      {
        label: 'Thailand',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Thailand'

        }
      },

      {
        label: 'Timor-Leste',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Timor-Leste'

        }
      },
      {
        label: 'Togo',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Togo'

        }
      },
      {
        label: 'Tonga',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Tonga'

        }
      },
      {
        label: 'Trinidad and Tobago',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Trinidad and Tobago'

        }
      },
      {
        label: 'Tunisia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Tunisia'

        }
      },

      {
        label: 'Turkey',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Turkey'

        }
      },
      {
        label: 'Turkmenistan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Turkmenistan'

        }
      },
      {
        label: 'Turks and Caicos Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Turks and Caicos Islands'

        }
      },
      {
        label: 'Tuvalu',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Tuvalu'

        }
      },
      {
        label: 'Uganda',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Uganda'

        }
      },

      {
        label: 'Ukraine',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Ukraine'

        }
      },
      {
        label: 'United Arab Emirates',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'United Arab Emirates'

        }
      },
      {
        label: 'United Kingdom',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'United Kingdom'

        }
      },
      {
        label: 'Tanzania',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Tanzania'

        }
      },
      {
        label: 'USA',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'USA'

        }
      },

      {
        label: 'Uruguay',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Uruguay'

        }
      },
      {
        label: 'Uzbekistan',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Uzbekistan'

        }
      },
      {
        label: 'Vanuatu',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Vanuatu'

        }
      },
      {
        label: 'Venezuela',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Venezuela'

        }
      },
      {
        label: 'Viet Nam',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Viet Nam'

        }
      },

      {
        label: 'Wallis and Futuna Islands',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Wallis and Futuna Islands'

        }
      },
      {
        label: 'Yemen',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Yemen'

        }
      },
      {
        label: 'Zambia',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Zambia'

        }
      },
      {
        label: 'Zimbabwe',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Zimbabwe'

        }
      },
      {
        label: 'KP Annex B',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'KP Annex B'

        }
      },

      {
        label: 'Non KP Annex B',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Non KP Annex B'

        }
      },
      {
        label: 'OECD',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'OECD'

        }
      },
      {
        label: 'Non-OECD',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Non-OECD'

        }
      },
      {
        label: 'EU27',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'EU27'

        }
      },


      {
        label: 'Asia',
        backgroundColor: 'rgba(45,35,255,1)',
        borderColor: 'rgba(45,35,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Asia'

        }
      },
      {
        label: 'Central America',
        backgroundColor: 'rgba(5,255,4,1)',
        borderColor: 'rgba(5,255,4,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Central America'

        }
      },
      {
        label: 'Europe',
        backgroundColor: 'rgba(50,50,70,1)',
        borderColor: 'rgba(50,50,70,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Europe'

        }
      },
      {
        label: 'Middle East',
        backgroundColor: 'rgba(1,245,55,1)',
        borderColor: 'rgba(1,245,55,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Middle East'

        }
      },
      {
        label: 'North America',
        backgroundColor: 'rgba(5,120,25,1)',
        borderColor: 'rgba(5,120,25,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'North America'

        }
      },

      {
        label: 'Oceania',
        backgroundColor: 'rgba(25,5,55,1)',
        borderColor: 'rgba(25,5,55,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Oceania'

        }
      },
      {
        label: 'South America',
        backgroundColor: 'rgba(47,145,5,1)',
        borderColor: 'rgba(47,145,5,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'South America'

        }
      },
      {
        label: 'Bunkers',
        backgroundColor: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Bunkers'

        }
      },
      {
        label: 'Statistical Difference',
        backgroundColor: 'rgba(255,0,0,1)',
        borderColor: 'rgba(255,0,0,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'Statistical Difference'

        }
      },
      {
        label: 'World',
        backgroundColor: 'rgba(1,25,255,1)',
        borderColor: 'rgba(1,25,255,1)',
        borderWidth: 2,
        data: v8,
        spanGaps: false,
        parsing: {
          xAxisKey: 'time',
          yAxisKey: 'World'

        }
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
        text: "V8",
      },
    },
    scales: {
      y: { min: 0, max: 40000 }

    },
  }


  return (
    <div class="linkki1" style={{maxWidth:'1500px'}}>
      <Line options={options} data={v8chart} />
      <p> CO2 emissions by country</p>
      <p ><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D"> Dataset</a> </p>
      <p ><a href="https://essd.copernicus.org/articles/14/1917/2022/"> More info</a> </p>

    </div>
  )
}
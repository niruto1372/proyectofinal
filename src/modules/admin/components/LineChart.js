import React from 'react'
import { Line } from 'react-chartjs-2';
import SelectNumber from './SelectNumbers';
import SelectTime from './SelectTime';
import * as moment from 'moment';

import { Chart } from "react-google-charts";



const LineChart = ({ curva, loading, obtenerVariable, curvaAconsultar, setcurvaAconsultar }) => {




  const datachartVALUE = {

    value: curva.map((objVariable) => {
      return {
        value: objVariable.value,
      }
    }),
  };


  const datachartTIME = {

    time: curva.map((objVariable) => {
      return {
        time: objVariable.time,
      }
    }),
  };


  const datachartTotal = {

    value: curva.map((objVariable) => {
      return {
        value: objVariable.value,
        time: objVariable.time,
      }
    }),
  };

  console.log(datachartTotal);


  let objValue = datachartVALUE.value;
  let objTime = datachartTIME.time;



  const dataValue = SelectNumber(objValue);
  const dataTime = SelectTime(objTime);


  const state = {


    labels: dataTime,
    datasets: [
      {
        label: ` ${curvaAconsultar}`,
        //fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255, 159, 64, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255, 159, 64, 1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        maintainAspectRatio: true,
        data: dataValue
      }
    ]
  }



  return (
    <div>
      <div>
        <Line
          data={state}
          options={{
            title: {
              display: true,
              text: ` ${curvaAconsultar}`,
              fontSize: 20
            },
            legend: {
              display: true,
              position: 'top'
            }
          }}
        />


        
      </div>

    </div>
  )
}

export default LineChart

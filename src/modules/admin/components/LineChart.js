import React from 'react'
import { Line } from 'react-chartjs-2';

const LineChart = ({ curva, loading, obtenerVariable, curvaAconsultar, setcurvaAconsultar }) => {
  
  

  
  



const state = {




  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset of Months',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56]
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
            text: 'Average Rainfall per month',
            fontSize: 20
          },
          legend: {
            display: true,
            position: 'right'
          }
        }}
      />
    </div>
  </div>
)
}

export default LineChart

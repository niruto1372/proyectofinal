import React from 'react'
import { Line } from 'react-chartjs-2';
import Cargando from './Cargando';
import SelectNumber from './SelectNumbers';
import SelectTime from './SelectTime';



const LineChart = ({ curva, loading, obtenerVariable, curvaAconsultar, setcurvaAconsultar,colors }) => {




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




  let objValue = datachartVALUE.value;
  let objTime = datachartTIME.time;



  const dataValue = SelectNumber(objValue);
  const dataTime = SelectTime(objTime);


  const state = {


    labels: dataTime,
    datasets: [
      {
        label: ` ${curvaAconsultar}`,
        fill: true,
        lineTension: 0.1,
        backgroundColor: colors.backgroundColor,
        borderColor: colors.borderColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: colors.borderColor,
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: colors.borderColor,
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        maintainAspectRatio: false,
        data: dataValue,
        steppedLine: true
      }
    ]
  }



  return (

    <>



      {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> :


        <div className="card card-chart">
          <div className="card-header">
            <h5 className="card-title">Curva consultada: <strong>{curvaAconsultar}</strong></h5>
            <p className="card-category">Cuenta con:   {dataValue.length}   puntos</p>
          </div>

          <div className="card-body">
            <Line
              data={state}
              height={17}
              width={100}
              options={{
                title: {
                  display: false,
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
          {/* <div className="card-footer">
             <div className="chart-legend">
              <i className="fa fa-circle text-info"></i> Tesla Model S
              <i className="fa fa-circle text-warning"></i> BMW 5 Series
            </div> 
            <hr />
            <div className="card-stats">
              <i className="fa fa-check"></i> Data information certified
            </div>
          </div> */}
        </div>
      }
    </>
  )
}

export default LineChart

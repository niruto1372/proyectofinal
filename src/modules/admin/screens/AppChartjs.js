/* App.js */
import React, { Component } from "react";

import CanvasJSReact from '../../../assets/canvasjs.stock.react';

var CanvasJSStockChart = CanvasJSReact.CanvasJSStockChart;



const AppChartjs = ({ curva, loading, obtenerVariable, curvaAconsultar}) => {
  class AppStockChartjs extends Component {
    
    render() {
      const datachartVALUE = {
        value: curva.map((objVariable) => {
          return {
            x: Date.parse(objVariable.time),
            y: parseFloat(objVariable.value)
          }
        }),
      };

      const options = {
        title: {
          text: `Curva consultada: ${curvaAconsultar}`
        },
        animationEnabled: true,
        exportEnabled: true,
        charts: [{
          axisX: {
            crosshair: {
              enabled: true,
              snapToDataPoint: true
            }
          },
          axisY: {
            crosshair: {
              enabled: true,
              //snapToDataPoint: true
            }
          },
          data: [{
            type: "spline",
            dataPoints: datachartVALUE.value  //this.generateDataPoints(1000)
          }]
        }],
        rangeSelector: {
          inputFields: {
            startValue: 4000,
            endValue: 6000,
            valueFormatString: "###0"
          },

          buttons: [{
            label: `zoom++`,
            range: 800000,
            rangeType: "number"
          }, {
            label: "zoom+",
            range: 2000000,
            rangeType: "number"
          }, {
            label: "zoom",
            range: 5000000,
            rangeType: "number"
          }, {
            label: "All",
            rangeType: "all"
          }]
        }
      };

      const containerProps = {
        width: "100%",
        height: "365px",
        margin: "auto"
      };
      return (
        <div>
          <div>
            <CanvasJSStockChart containerProps={containerProps} options={options}
            /* onRef = {ref => this.chart = ref} */
            />
          </div>
        </div>
      );
    }
  }



  return (
    <div>
      <AppStockChartjs />
    </div>
  )
}

export default AppChartjs

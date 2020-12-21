import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { getVariableById } from '../../../services/alarmas'
import TableSingleVariable from '../components/TableSingleVariable'
import LineChart from '../components/LineChart'
import Cargando from '../components/Cargando'
import CC3ElectricoMotor from '../components/FormSingleAlarm/CC3ElectricoMotor'
import AppChartjs from './AppChartjs'
import CardStats from '../components/CardStats/CardStats'


const CC3Electrico = () => {
  const [curva, setCurva] = useState([]);
  const [loading, setLoading] = useState(true);
  const [curvaAconsultar, setcurvaAconsultar] = useState("");
  const [graficar, setgraficar] = useState(false);

  const obtenerVariable = (curvaAconsultar) => {
    getVariableById(curvaAconsultar).then((rpta) => {
      console.log(`variable consultada: ${curvaAconsultar}`);
      setcurvaAconsultar(`${curvaAconsultar}`);
      setCurva(rpta);
      setLoading(false);
    });
  };

  useEffect(() => {
    obtenerVariable();
  }, []);
  const colors = { backgroundColor: 'rgba(54, 162, 235, 0.2)', borderColor: 'rgba(54, 162, 235, 1)' };

  return (<>
    <Header />




    <div className="wrapper">
      <div className="">
        <div className="content">
          <div className="row mr-0 ml-0 mx-auto mb-0">
            <div className="col">
              <h3  className="text-center">Área: Coco 3</h3>              
            </div>
          </div>
          
          <div className="row ml-0 mr-0 ">
            <div className="col-lg-3 col-md-4 col-sm-12  mx-auto">
              <div className="col-lg-12 col-md-12 col-sm-12  mx-auto">
                <CC3ElectricoMotor setgraficar={setgraficar} setcurvaAconsultar={setcurvaAconsultar} obtenerVariable={obtenerVariable} />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12  mx-auto">
                {graficar === false ? null :
                  <div>
                    {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> : <CardStats curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />}

                  </div>
                }
              </div>
            </div>



            <div className="col-lg-9  col-md-8 col-sm-11    mx-auto">
              {graficar === false ? null :
                <div className="card">
                  <div className="card-body">
                    {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> : <AppChartjs curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />}
                  </div>
                  <div className="card-footer ">
                    <hr />
                    <div className="stats">
                      <i className="fas fa-database"></i> Data almacenada en MongoDB
                    </div>
                  </div>
                </div>
              }

            </div>

            <div className="col-lg-12  col-md-12 col-sm-12    mx-auto">
              {graficar === false ? null :
                <LineChart curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar}  colors={colors}/>
              }
            </div>
          </div>


          <div className="row  ml-0 mr-0">
            <div className="col-md-12 col-sm-12  mx-auto">
              {graficar === false ? null :
                <TableSingleVariable curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
  )
}

export default CC3Electrico


import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { getVariableById } from '../../../services/alarmas'
import Formulario from '../components/Formulario'
import TableSingleVariable from '../components/TableSingleVariable'
import LineChart from './../components/LineChart'
import Cargando from './../components/Cargando'
import CizallaCHDampers from '../components/FormSingleAlarm/CizallaCHDampers'
import CizallaSisLimpiezaAglamper from '../components/FormSingleAlarm/CizallaSisLimpiezaAglamper'
import HCBaghouseStirring from '../components/FormSingleAlarm/HCBaghouseStirring'
import HCTransformadorLanzaoxigeno from '../components/FormSingleAlarm/HCTransformadorLanzaoxigeno'

const AdminDashboardHc = () => {
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

  return (<>
    <Header />

    {/* ************************************* DON'T DELETE  **************************************** */}

    {/* <div className="row ml-0 mr-0 ">
            <div className="col-lg-4 col-md-4 col-sm-10  mx-auto">
                <Formulario />
            </div>
            <div className="col-lg-8  col-md-8 col-sm-10    mx-auto">
                <div className="card">
                    <div className="card-body">
                        <LineChart curvaAconsultar curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar}/>
                    </div>
                </div>
            </div>
        </div> */}


    <div className="wrapper">


      <div className="">
        <div className="content">
          <div className="row ml-0 mr-0 ">
            <div className="col-lg-3 col-md-4 col-sm-10  mx-auto">
              <div className="col  mx-auto">
                <HCBaghouseStirring setgraficar={setgraficar} setcurvaAconsultar={setcurvaAconsultar} obtenerVariable={obtenerVariable} />
              </div>
              <div className="col  mx-auto">
                <HCTransformadorLanzaoxigeno setgraficar={setgraficar} setcurvaAconsultar={setcurvaAconsultar} obtenerVariable={obtenerVariable} />
              </div>

            </div>
            <div className="col-lg-9  col-md-8 col-sm-11    mx-auto">
              {graficar === false ? null :
                <div className="card">
                  <div className="card-body">
                    {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> : <LineChart curvaAconsultar curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />}

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
          </div>

          <div className="row">
            <div className="col-md-11 col-sm-11  mx-auto">
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

export default AdminDashboardHc




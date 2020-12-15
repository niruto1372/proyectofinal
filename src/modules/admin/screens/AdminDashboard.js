import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { getVariableById } from '../../../services/alarmas'
import Formulario from '../components/Formulario'
import FormularioSingleAlarm from '../components/FormularioSingleAlarm'
import TableSingleVariable from '../components/TableSingleVariable'
import LineChart from './../components/LineChart'
import Cargando from './../components/Cargando'

const AdminDashboard = () => {
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
            {/* <div class="sidebar" data-color="white" data-active-color="danger">
                <div class="logo">
                    <a href="https://www.creative-tim.com" class="simple-text logo-mini">
                        <div class="logo-image-small">
                            <img src="../assets/img/logo-small.png" />
                        </div>

                    </a>
                    <a href="https://www.creative-tim.com" class="simple-text logo-normal">
                        Creative Tim
                        <div class="logo-image-big">
                            <img src="../assets/img/logo-big.png" />
                        </div>
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <ul class="nav">
                        <li class="active ">
                            <a href="./dashboard.html">
                                <i class="nc-icon nc-bank"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="./icons.html">
                                <i class="nc-icon nc-diamond"></i>
                                <p>Icons</p>
                            </a>
                        </li>
                        <li>
                            <a href="./map.html">
                                <i class="nc-icon nc-pin-3"></i>
                                <p>Maps</p>
                            </a>
                        </li>
                        <li>
                            <a href="./notifications.html">
                                <i class="nc-icon nc-bell-55"></i>
                                <p>Notifications</p>
                            </a>
                        </li>
                        <li>
                            <a href="./user.html">
                                <i class="nc-icon nc-single-02"></i>
                                <p>User Profile</p>
                            </a>
                        </li>
                        <li>
                            <a href="./tables.html">
                                <i class="nc-icon nc-tile-56"></i>
                                <p>Table List</p>
                            </a>
                        </li>
                        <li>
                            <a href="./typography.html">
                                <i class="nc-icon nc-caps-small"></i>
                                <p>Typography</p>
                            </a>
                        </li>
                        <li class="active-pro">
                            <a href="./upgrade.html">
                                <i class="nc-icon nc-spaceship"></i>
                                <p>Upgrade to PRO</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div> */}

            <div className="">
                <div className="content">
                    <div className="row ml-0 mr-0 ">
                        <div className="col-lg-4 col-md-4 col-sm-10  mx-auto">
                            <FormularioSingleAlarm setgraficar={setgraficar} setcurvaAconsultar={setcurvaAconsultar} obtenerVariable={obtenerVariable} />
                        </div>
                        <div className="col-lg-6  col-md-6 col-sm-10    mx-auto">
                            {graficar === false ? null :
                                <div className="card">
                                    <div className="card-body">
                                        {loading ? <Cargando text="Realizando consulta de variable seleccionada" /> : <LineChart curvaAconsultar curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />}

                                    </div>
                                    <div class="card-footer ">
                                        <hr />
                                        <div class="stats">
                                            <i class="fas fa-database"></i> Data almacenada en MongoDB
                        </div>
                                    </div>
                                </div>
                            }

                        </div>

                    </div>


                    <div className="row  ml-0 mr-0">
                        <div className="col-md-11 col-sm-11  mx-auto">
                            <TableSingleVariable curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar} />
                        </div>
                    </div>

                </div>
            </div>

        </div>





        <Footer />



    </>
    )
}

export default AdminDashboard

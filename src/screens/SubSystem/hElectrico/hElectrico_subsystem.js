import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./../../404/NotFound";
import MainTableSubsystem from './../../SubSystem/MainTableSubsystem';

const hElectrico_subsystem = () => {
    const data=["corriente de oscilacion","corriente de extraccion", "Corriente de falsa barra", "Corriente Tundish"];

    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-header">
                    <h2 className="card-title text-center">Horno Eléctrico</h2>
                </div>


                <Router>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">

                                <ul className="list-group ">
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        Horno
                                        <span className="badge badge-secondary badge-pill">6</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        
                                            Carro Cesta
                                        
                                        <span className="badge badge-secondary badge-pill">8</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                       
                                            Castillo
                                        
                                        <span className="badge badge-secondary badge-pill">2</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        
                                            Cámaras de Limpieza
                                        
                                        <span className="badge badge-secondary badge-pill">2</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        
                                           HRR
                                        
                                        <span className="badge badge-secondary badge-pill">8</span>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-md-9 col-sm-12">
                                <MainTableSubsystem data={data}/>
                            </div>
                        </div>
                    </div>


                    
                </Router>


            </div>
        </div>
    )
}

export default hElectrico_subsystem

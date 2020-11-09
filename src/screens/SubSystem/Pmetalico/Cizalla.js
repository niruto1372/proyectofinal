import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./../../404/NotFound";
import MainTableSubsystem from './../../SubSystem/MainTableSubsystem';

const Cizalla = () => {
    return (
        <div>
            <div className="card card__table mx-auto">
                <div class="card-header">
                    <h2 className="card-title text-center">Patio Metálico</h2>
                </div>


                <Router>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">

                                <ul className="list-group ">
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        Grua Euromec
                                        <span className="badge badge-secondary badge-pill">1</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        
                                            Balanza
                                        
                                        <span className="badge badge-secondary badge-pill">4</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                       
                                            Cizalla
                                        
                                        <span className="badge badge-secondary badge-pill">0</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        
                                            Portal de Radiación 
                                        
                                        <span className="badge badge-secondary badge-pill">3</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        
                                            Sistema de Limpieza
                                        
                                        <span className="badge badge-secondary badge-pill">1</span>
                                    </li>
                                </ul>


                            </div>
                            <div className="col-md-9 col-sm-12">
                                <MainTableSubsystem/>
                            </div>
                        </div>
                    </div>


                    
                </Router>


            </div>
        </div>
    )
}

export default Cizalla

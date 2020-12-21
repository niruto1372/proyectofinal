import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableSubsystem from './../../SubSystem/MainTableSubsystem';

const cc3_subsystem = () => {
    const data=["corriente de oscilacion","corriente de extraccion", "Corriente de falsa barra", "Corriente Tundish"];
    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-header">
                    <h2 className="card-title text-center">CC3</h2>
                </div>


                <Router>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">

                                <ul className="list-group ">
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        Eléctrico
                                        <span className="badge badge-secondary badge-pill">4</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        
                                            Hidráulico
                                        
                                        <span className="badge badge-secondary badge-pill">6</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                       
                                            Mecánico
                                        
                                        <span className="badge badge-secondary badge-pill">6</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center ">
                                        
                                            Proceso
                                        
                                        <span className="badge badge-secondary badge-pill">5</span>
                                    </li>
                                    
                                </ul>


                            </div>
                            <div className="col-md-9 col-sm-12">
                                <MainTableSubsystem data={data} />
                            </div>
                        </div>
                    </div>


                    
                </Router>


            </div>
        </div>
    )
}

export default cc3_subsystem

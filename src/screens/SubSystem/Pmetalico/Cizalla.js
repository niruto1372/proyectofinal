import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import MainTableSubsystem from './../../SubSystem/MainTableSubsystem';

const Cizalla = () => {
    const data=["Nivel tanque de aceite","temperatura aceite","Corriente motor bomba 1", "Corriente motor bomba 2"];
    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-header">
                    <h2 className="card-title text-center">Cizalla</h2>
                </div>


                <Router>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">

                                <ul className="list-group ">
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        Central Hidráulica
                                        <span className="badge badge-secondary badge-pill">4</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        
                                            Sistema de Limpieza
                                        
                                        <span className="badge badge-secondary badge-pill">4</span>
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

export default Cizalla

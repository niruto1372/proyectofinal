import React from 'react'
import { BrowserRouter as Router} from "react-router-dom";
// import NotFound from "./../../404/NotFound";
import MainTableSubsystem from './../../SubSystem/MainTableSubsystem';

const hCuchara_subsystem = () => {
    const data=["Potencia activa","Potencia reactiva", "Corriente fase R", "Corriente fase S","Filtro 1 temperatura","Filtro 1 presion","Filtro 2 temperatura","Filtro 2 presion"];

    return (
        <div>
            <div className="card card__table mx-auto">
                <div className="card-header">
                    <h2 className="card-title text-center">Horno Cuchara</h2>
                </div>


                <Router>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">

                                <ul className="list-group ">
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        Transformador
                                        <span className="badge badge-secondary badge-pill">4</span>
                                    </li>
                                    <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                        
                                            BagHouse
                                        
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

export default hCuchara_subsystem

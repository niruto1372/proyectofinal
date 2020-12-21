import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./../../404/NotFound";
import hCuchara_subsystem from "./../../SubSystem/hCuchara/hCuchara_subsystem";


const Pmetalico = () => {
  return (
    <>
      <Router>
        <div className="card card__table mx-auto">
          <div className="card-body ">
            <div className="table-responsive-md">
              <table className="table table-bordered table-hover text-center table-sm">
                <thead>
                  <tr>
                    <th>Sistema</th>
                    <th>Lectura</th>
                    <th>Alarmas</th>
                    <th>Tiempo Activadas</th>
                    <th>Historico</th>
                    <th>Alarmas Ocultas</th>
                    <th>OM Pendientes</th>
                  </tr>
                  <tr>
                    <th><i className="fas fa-industry"></i></th>
                    <th><i className="fas fa-exchange-alt"></i></th>
                    <th colSpan="2"><i className="fas fa-exclamation-triangle text-warning"></i></th>
                    <th><i className="fas fa-clock"></i></th>
                    <th><i className="fas fa-eye-slash"></i></th>
                    <th><i className="fas fa-exclamation-circle text-danger"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}

                      <Link

                        to={"/hCuchara/transformador/subsistema"}
                        className=""
                      >
                        Transformador
                      </Link>
                    </td>

                    <td>15/15</td>
                    <td>2</td>
                    <td>50 min</td>
                    <td>1</td>
                    <td>3</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td >
                      {/* <i className="fas fa-circle fa__circle_redcrayola"></i> */}
                      <Link

                        to={"/hCuchara/baghose/subsistema"}
                        className=""
                      >
                        BagHouse
                      </Link>

                    </td>
                    <td>8/8</td>
                    <td>1</td>
                    <td>27 min</td>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  
                </tbody>
              </table>
            </div>

          </div>
        </div>



        <br />
        <Switch>
          <Route path={"/hCuchara/transformador/subsistema"} component={hCuchara_subsystem} />
          <Route path={"/hCuchara/baghose/subsistema"} component={hCuchara_subsystem} />

          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>





    </>
  );
};

export default Pmetalico;

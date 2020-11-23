import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./../../404/NotFound";
import hElectrico_subsystem from "./../../SubSystem/hElectrico/hElectrico_subsystem";


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
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>

                      <Link
                        exact
                        to={"/hElectrico/cizalla/subsistema"}
                        className=""
                      >
                        Patio 1
                      </Link>
                    </td>

                    <td>4/10</td>
                    <td>3</td>
                    <td>33 min</td>
                    <td>5</td>
                    <td>23</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/geuromec/subsistema"}
                        className=""
                      >
                        Puente
                      </Link>
                    
                </td>
                    <td>3/7</td>
                    <td>10</td>
                    <td>17 min</td>
                    <td>0</td>
                    <td>1</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/balanza/subsistema"}
                        className=""
                      >
                        Barcazas
                      </Link>
                    
                </td>
                    <td>7/15</td>
                    <td>2</td>
                    <td>5</td>
                    <td>9</td>
                    <td>-</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/slimpieza/subsistema"}
                        className=""
                      >
                        Estacionamiento
                      </Link>
                    
                </td>
                    <td>2/7</td>
                    <td>10</td>
                    <td>-</td>
                    <td>4</td>
                    <td>1</td>
                    <td>-</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>



        <br />
        <Switch>
          <Route path={"/hElectrico/cizalla/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/geuromec/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/balanza/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/slimpieza/subsistema"} component={hElectrico_subsystem} />
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>





    </>
  );
};

export default Pmetalico;

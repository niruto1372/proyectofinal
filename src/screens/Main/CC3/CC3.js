import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./../../404/NotFound";
import cc3_subsystem from "./../../SubSystem/CC3/cc3_subsystem";


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
                        to={"/cc3/cizalla/subsistema"}
                        className=""
                      >
                        Balanza 0
                      </Link>
                    </td>

                    <td>4/10</td>
                    <td>2</td>
                    <td>35 min</td>
                    <td>4</td>
                    <td>7</td>
                    <td>2</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/cc3/geuromec/subsistema"}
                        className=""
                      >
                        Balanza 1
                      </Link>
                    
                </td>
                    <td>6/8</td>
                    <td>1</td>
                    <td>07 min</td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/cc3/balanza/subsistema"}
                        className=""
                      >
                        Balanza 2
                      </Link>
                    
                </td>
                    <td>3/8</td>
                    <td>2</td>
                    <td>19</td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i className="fas fa-circle fa__circle_redcrayola"></i>
                      <Link
                        exact
                        to={"/cc3/slimpieza/subsistema"}
                        className=""
                      >
                        Drenaje
                      </Link>
                    
                </td>
                    <td>5/6</td>
                    <td>7</td>
                    <td>2</td>
                    <td>8</td>
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
          <Route path={"/cc3/cizalla/subsistema"} component={cc3_subsystem} />
          <Route path={"/cc3/geuromec/subsistema"} component={cc3_subsystem} />
          <Route path={"/cc3/balanza/subsistema"} component={cc3_subsystem} />
          <Route path={"/cc3/slimpieza/subsistema"} component={cc3_subsystem} />
          
          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>





    </>
  );
};

export default Pmetalico;

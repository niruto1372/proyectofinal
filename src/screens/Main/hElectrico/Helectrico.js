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
            <div class="table-responsive-md">
              <table class="table table-bordered table-hover text-center table-sm">
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
                    <th><i class="fas fa-industry"></i></th>
                    <th><i class="fas fa-exchange-alt"></i></th>
                    <th colspan="2"><i class="fas fa-exclamation-triangle text-warning"></i></th>
                    <th><i class="fas fa-clock"></i></th>
                    <th><i class="fas fa-eye-slash"></i></th>
                    <th><i class="fas fa-exclamation-circle text-danger"></i></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                      <i class="fas fa-circle fa__circle_redcrayola"></i>

                      <Link
                        exact
                        to={"/hElectrico/cizalla/subsistema"}
                        className=""
                      >
                        Cizalla
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
                    <td scope="row">
                      <i class="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/geuromec/subsistema"}
                        className=""
                      >
                        Grua euromec
                      </Link>
                    
                </td>
                    <td>8/8</td>
                    <td>1</td>
                    <td>27 min</td>
                    <td>0</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i class="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/balanza/subsistema"}
                        className=""
                      >
                        Balanza
                      </Link>
                    
                </td>
                    <td>4/5</td>
                    <td>0</td>
                    <td>-</td>
                    <td>1</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td scope="row">
                      <i class="fas fa-circle fa__circle_seagreen"></i>
                      <Link
                        exact
                        to={"/hElectrico/slimpieza/subsistema"}
                        className=""
                      >
                        Sistema de limpieza
                      </Link>
                    
                </td>
                    <td>2/3</td>
                    <td>0</td>
                    <td>-</td>
                    <td>1</td>
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

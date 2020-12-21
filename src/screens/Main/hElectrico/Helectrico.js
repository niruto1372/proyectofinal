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
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}

                      <Link

                        to={"/hElectrico/horno/subsistema"}
                        className=""
                      >
                        Horno
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
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}
                      <Link

                        to={"/hElectrico/carrocesta/subsistema"}
                        className=""
                      >
                        Carro Cesta
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
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}
                      <Link

                        to={"/hElectrico/castillo/subsistema"}
                        className=""
                      >
                        Castillo
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
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}
                      <Link

                        to={"/hElectrico/climpieza/subsistema"}
                        className=""
                      >
                        Cámaras de limpieza
                      </Link>

                    </td>
                    <td>2/7</td>
                    <td>10</td>
                    <td>-</td>
                    <td>4</td>
                    <td>1</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td >
                      {/* <i className="fas fa-circle fa__circle_seagreen"></i> */}
                      <Link

                        to={"/hElectrico/hrr/subsistema"}
                        className=""
                      >
                        HRR
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
          <Route path={"/hElectrico/horno/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/carrocesta/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/castillo/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/climpieza/subsistema"} component={hElectrico_subsystem} />
          <Route path={"/hElectrico/hrr/subsistema"} component={hElectrico_subsystem} />


          {/* <Route component={NotFound} /> */}
        </Switch>
      </Router>





    </>
  );
};

export default Pmetalico;

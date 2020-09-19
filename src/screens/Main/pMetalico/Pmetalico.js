import React from "react";

const Pmetalico = () => {
  return (
    <>
      <div className="card card__table mx-auto">
        <div className="card-body ">
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
                <th  colspan="2"><i class="fas fa-exclamation-triangle text-warning"></i></th>
                <th><i class="fas fa-clock"></i></th>
                <th><i class="fas fa-eye-slash"></i></th>
                <th><i class="fas fa-exclamation-circle text-danger"></i></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                    <i class="fas fa-circle fa__circle_redcrayola"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">
                    <i class="fas fa-circle fa__circle_seagreen"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td scope="row">
                    <i class="fas fa-circle fa__circle_seagreen"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="card card__table mx-auto">
        <div className="card-body ">
          <table class="table table-bordered table-hover text-center table-sm">
            <thead>
              <tr>
                <th>Área</th>
                <th>Sistema</th>
                <th>Subsistema</th>
                <th>Variable Observada</th>
                <th>Detalle</th>
                <th>Hora Inicio</th>
                <th>Generar OM</th>
                <th>Reincidencias</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                    <i class="fas fa-minus-circle text-danger"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <i class="fas fa-info-circle fa__question"></i>
                </td>
                <td></td>
                <td>
                    <i class="fas fa-play-circle text-success"></i>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">
                    <i class="fas fa-minus-circle text-danger"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <i class="fas fa-info-circle fa__question"></i>
                </td>
                <td></td>
                <td>
                    <i class="fas fa-play-circle text-success"></i>
                </td>
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">
                    <i class="fas fa-minus-circle text-danger"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <i class="fas fa-info-circle fa__question"></i>
                </td>
                <td></td>
                <td>
                    <i class="fas fa-play-circle text-success"></i>
                </td>
                
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">
                    <i class="fas fa-minus-circle text-danger"></i>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <i class="fas fa-info-circle fa__question"></i>
                </td>
                <td></td>
                <td>
                    <i class="fas fa-play-circle text-success"></i>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Pmetalico;

import React from 'react'

const CC3 = () => {
  return (
    <div>
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
                    Cizalla
                </td>

                <td>4/8</td>
                <td>7</td>
                <td>32 min</td>
                <td>1</td>
                <td>3</td>
                <td>1</td>
              </tr>
              <tr>
                <td scope="row">
                  <i class="fas fa-circle fa__circle_seagreen"></i>
                    Grua euromec
                </td>
                <td>3/6</td>
                <td>4</td>
                <td>26 min</td>
                <td>0</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td scope="row">
                  <i class="fas fa-circle fa__circle_seagreen"></i>
                    Balanza
                </td>
                <td>1/9</td>
                <td>0</td>
                <td>2 min</td>
                <td>1</td>
                <td>-</td>
                <td>2</td>
              </tr>
              <tr>
                <td scope="row">
                  <i class="fas fa-circle fa__circle_seagreen"></i>
                    Sistema de limpieza
                </td>
                <td>3/5</td>
                <td>2</td>
                <td>10 min</td>
                <td>3</td>
                <td>1</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default CC3

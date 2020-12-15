import React from 'react'

const MainTableSubsystem = () => {
  return (
    <div>
      <div className="table-responsive-md">
        <table className="table table-bordered table-hover text-center table-sm ">
          <thead>
            <tr>
              <th>Subsistema</th>
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
                <i className="fas fa-circle fa__circle_redcrayola"></i>
                    General
                  </td>

              <td>4/4</td>
              <td>-</td>
              <td>-</td>
              <td>1</td>
              <td>1</td>
              <td>-</td>
            </tr>
            <tr>
              <td >
                <i className="fas fa-circle fa__circle_seagreen"></i>
                    C. Hidráulicos
                </td>
              <td>3/3</td>
              <td>1</td>
              <td>16 min</td>
              <td>0</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td >
                <i className="fas fa-circle fa__circle_seagreen"></i>
                    Bombas
                </td>
              <td>3/3</td>
              <td>1</td>
              <td>16 min</td>
              <td>0</td>
              <td>-</td>
              <td>1</td>
            </tr>
            <tr>
              <td >
                <i className="fas fa-circle fa__circle_seagreen"></i>
                    Lubricación
                </td>
              <td>4/4</td>
              <td>-</td>
              <td>-</td>
              <td>0</td>
              <td>2</td>
              <td>-</td>
            </tr>
            <tr>
              <td >
                <i className="fas fa-circle fa__circle_seagreen"></i>
                    Refrigeración
                </td>
              <td>1/1</td>
              <td>-</td>
              <td>-</td>
              <td>0</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MainTableSubsystem

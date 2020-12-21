import React from 'react'

const MainTableSubsystem = ({data}) => {
  return (
    <div>
      <div className="table-responsive-lg">
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
                
                    {data[0]}
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
                
                {data[1]}
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
               
                {data[2]}
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
                
                {data[3]}
                </td>
              <td>4/4</td>
              <td>-</td>
              <td>-</td>
              <td>0</td>
              <td>2</td>
              <td>-</td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default MainTableSubsystem

import React, { useState } from 'react'
import Cargando from '../Cargando';

const CardStats = ({ curva, loading, obtenerVariable, curvaAconsultar, setcurvaAconsultar }) => {

  //const [entry, setEntry] = useState({ value: 0, time: `00:00:00` });


  // setcurvaAconsultar=curvaAconsultar;

 

  
    let lastposition = curva.length;
    console.log(`lastposition: ${lastposition}`);
    let entries = curva[lastposition - 1];
    console.log(`curva: ${entries}`);
    // let lastValue=entries.value;
    // console.log(lastValue);
  


  return (
    <>
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row">
            <div className="col-5 col-md-4">
              <div className="icon-big text-center icon-warning">
                <i className="nc-icon nc-globe text-warning"></i>
              </div>

            </div>

            <div className="col-7 col-md-8">
              <div className="numbers">
                <p className="card-category "> <strong>{curvaAconsultar}</strong> </p>
                <p className="card-category">Cantidad de elementos:  </p>
                <p className="card-title">{lastposition}</p>

              </div>
            </div>

          </div>
        </div>

        <div className="card-footer ">
          <hr />
          <div className="stats">
            <i className="fa fa-refresh"></i>
                  
          </div>
        </div>

      </div>
    </>
  )
}

export default CardStats

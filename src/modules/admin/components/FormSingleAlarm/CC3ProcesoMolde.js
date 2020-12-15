import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


const CC3ProcesoMolde = ({ setcurvaAconsultar, obtenerVariable, setgraficar }) => {
  const [form, setForm] = useState({
    variable: "Flujo De Agua",

  });
  const [error, setError] = useState(false);

  const [consulta, setConsulta] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.variable !== "") {
      setError(false);
      setForm({
        variable: `${form.variable}`,
      });
      setConsulta(true);
      setgraficar(true);
      Swal.fire({
        title: "Consulta realizada",
        icon: "success",
        timer: 2000,
        showConfirmButton: true,
      })
      setcurvaAconsultar = form.variable;
      obtenerVariable(`${form.variable}`);
      return;
    }
    setError(true);
  }










  return (
    <div className="card  mx-auto">
      <div className="card-header ">
        <h5 className="card-title">Coco 3</h5>
        <div className="card-category">
          Proceso <i className="fas fa-chevron-right"></i>  Molde
        </div>
      </div>

      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          {error === true ? (
            <div className="alert alert-danger " role="alert">
              <strong>Error!</strong> Debes llenar todos los campos.

            </div>
          ) : null}


          <div className="form">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputVariableSingleAlarm">Variable:</label>
              <select id="inputVariableSingleAlarm" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
              <option value="Flujo De Agua">Flujo De Agua</option>
                <option value="Presion De Agua">Presion De Agua</option>
                <option value="Temperatura De Agua">Temperatura DeAgua</option>
                
              </select>
            </div>
            
              <button type="submit" className="btn btn-success ">Consultar</button>
            

          </div>
        </form>

      </div>
      
      {consulta === true ? (<div className="card-footer ">
        <hr />
        <div className="stats">
          <i className="fas fa-check"></i> Consulta realizada con éxito
        </div>
      </div>) : null}

    </div>
  )
}


export default CC3ProcesoMolde


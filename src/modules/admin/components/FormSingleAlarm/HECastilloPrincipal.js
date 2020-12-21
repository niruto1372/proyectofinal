
import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


const HECastilloPrincipal = ({ setcurvaAconsultar, obtenerVariable, setgraficar }) => {
  const [form, setForm] = useState({
    variable: "Temperatura Aceite",

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
        <h6 className="card-title">Sistema: Castillo </h6>
        <p className="card-category">Subsistema: Principal</p>
      </div>

      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          {error === true ? (
            <div className="alert alert-danger " role="alert">
              <strong>Error!</strong> Debes llenar todos los campos.

            </div>
          ) : null}


          <div className="form">
            <div className="form-group">
              <label htmlFor="inputVariableSingleAlarm">Variable:</label>
              <select id="inputVariableSingleAlarm" className="form-control " name="variable" onChange={handleChange} value={form.variable}>
                <option value="Temperatura Aceite">Temperatura Aceite</option>
                <option value="Saturacion De Filtro">Saturacion De Filtro</option>
                
              </select>
            </div>
            
            <div className="row">
              <div className="update  ml-auto mr-auto">
                <button type="submit" className="btn btn-success  btn-round ">Consultar</button>
              </div>
            </div>

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


export default HECastilloPrincipal



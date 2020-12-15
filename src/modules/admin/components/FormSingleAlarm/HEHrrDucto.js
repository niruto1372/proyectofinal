
import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


const HEHrrDucto = ({ setcurvaAconsultar, obtenerVariable, setgraficar }) => {
  const [form, setForm] = useState({
    variable: "Temperatura TE 251",

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
        <h6 className="card-title">HRR <i className="fas fa-chevron-right"></i>  Ducto</h6>

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
              <label htmlFor="HEHrrDucto">Variable:</label>
              <select id="HEHrrDucto" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
                <option value="Temperatura TE 251">Temperatura TE 251</option>
                <option value="Temperatura TE 252">Temperatura TE 252</option>
                <option value="Temperatura TE 253">Temperatura TE 253</option>
                <option value="Temperatura TE 253">Temperatura TE 253</option>

              </select>
            </div>

            <button type="submit" className="btn btn-success ">Consultar</button>


          </div>
        </form>

      </div>


      <hr />
      <div className="card-header ">
        <h6 className="card-title">HRR <i className="fas fa-chevron-right"></i>  Transformador</h6>

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
              <label htmlFor="HEHrrTransformador">Variable:</label>
              <select id="HEHrrTransformador" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
                <option value="Inclinacion">Inclinacion</option>
                <option value="Valvula F1">Valvula F1</option>
                <option value="Valvula F2">Valvula F2</option>
                <option value="Valvula F3">Valvula F3</option>

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


export default HEHrrDucto


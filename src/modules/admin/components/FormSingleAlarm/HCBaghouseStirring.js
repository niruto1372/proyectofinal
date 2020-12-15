import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


const HCBaghouseStirring = ({ setcurvaAconsultar, obtenerVariable, setgraficar }) => {
  const [form, setForm] = useState({
    variable: "Filtro 1 Temperatura",

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
        <h6 className="card-title">BagHouse <i className="fas fa-chevron-right"></i>  Stirring</h6>
        
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
              <label htmlFor="HCBagHouseStirring">Variable:</label>
              <select id="HCBagHouseStirring" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
                <option value="Filtro 1 Temperatura">Filtro 1 Temperatura</option>
                <option value="Filtro 1 Presion">Filtro 1 Presion</option>
                <option value="Filtro 2 Temperatura">Filtro 2 Temperatura</option>
                <option value="Filtro 2 Presion">Filtro 2 Presion</option>
                
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


export default HCBaghouseStirring




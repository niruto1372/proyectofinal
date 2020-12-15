
import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';


const HECarroCestaCarro1 = ({ setcurvaAconsultar, obtenerVariable, setgraficar }) => {
  const [form, setForm] = useState({
    variable: "Peso",

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
        <h6 className="card-title">Carro Cesta <i className="fas fa-chevron-right"></i>  Carro 1</h6>
        
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
              <label htmlFor="HECarroCescaCarro1">Variable:</label>
              <select id="HECarroCescaCarro1" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
                <option value="Peso">Peso</option>
                <option value="Corriente Motor 1">Corriente Motor 1</option>
                <option value="Corriente Motor 2">Corriente Motor 2</option>
                <option value="Posicion">Posicion</option>

              </select>
            </div>

            <button type="submit" className="btn btn-success ">Consultar</button>


          </div>
        </form>

      </div>



      <hr />

      <div className="card-header ">
        <h6 className="card-title"> Carro Cesta <i className="fas fa-chevron-right"></i>  Carro 2</h6>
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
              <label htmlFor="HECarroCescaCarro2">Variable:</label>
              <select id="HECarroCescaCarro2" className="form-control ml-2" name="variable" onChange={handleChange} value={form.variable}>
                <option value="Peso">Peso</option>
                <option value="Corriente Motor 1">Corriente Motor 1</option>
                <option value="Corriente Motor 2">Corriente Motor 2</option>
                <option value="Posicion">Posicion</option>


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


export default HECarroCestaCarro1



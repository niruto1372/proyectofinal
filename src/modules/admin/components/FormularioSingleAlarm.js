import React from 'react'
import { useState } from 'react';
import Swal from 'sweetalert2';

const FormularioSingleAlarm = ({setcurvaAconsultar, obtenerVariable}) => {
  const [form, setForm] = useState({
    variable: "curva1",
    
  });
  const [error, setError] = useState(false);

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
      Swal.fire({
        title:"Consulta realizada",
        icon:"success",
        timer: 2000,
        showConfirmButton:true,
      })
      setcurvaAconsultar=form.variable;
      obtenerVariable(`${form.variable}`);
      return;
    }
    setError(true);
  }

  return (
    <div className="card  mx-auto">
      {/* <div className="card-header">
                <h4 className="card-title text-center">Realiza la seleccion para la variable a consultar:</h4>
            </div> */}
      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          {error === true ? (
            <div class="alert alert-danger " role="alert">
              <strong>Error!</strong> Debes llenar todos los campos.
              
            </div>
          ) : null}




          <div className="form-row">
            <div className="form-group">
              <label htmlFor="inputVariable">Variable</label>
              <select id="inputVariable" className="form-control" name="variable" onChange={handleChange} value={form.variable}>

                <option value="curva1">curva1</option>
                <option value="curva2">curva2</option>
                <option value="curva3">curva3</option>
                <option value="curva4">curva4</option>
                <option value="curva5">curva5</option>
              </select>
            </div>
            
          </div>

          <button type="submit" className="btn btn-success">Consultar</button>
          
        </form>
      </div>
    </div>
  )
}


export default FormularioSingleAlarm

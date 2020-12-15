import React from 'react';
import { useState } from 'react';

const Formulario = () => {

  const [form, setForm] = useState({
    variable: "01",
    funcion: "01",
    intervalo: "01",
    hinicio: "",
    hfinal: "",
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
    console.log(form);
    if (form.variable !== "" && form.funcion !== "" && form.intervalo !== "" && form.hinicio !== "" && form.hfinal !== "") {
      setError(false);
      setForm({
        variable: "01",
        funcion: "01",
        intervalo: "01",
        hinicio: "",
        hfinal: "",
      })
      console.log("formulario correcto");
      return;
    }
    setError(true);
  }

  return (
    <div className="card card__table mx-auto">
      <div className="card-header">
        <h4 className="card-title ">Realiza la selección de la variable a consultar:</h4>
      </div>
      <div className="card-body ">
        <form onSubmit={handleSubmit}>
          {error === true ? (
            <div class="alert alert-danger " role="alert">
              <strong>Error!</strong> Debes llenar todos los campos.
            </div>
          ) : null}


          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputVariable">Variable</label>
              <select id="inputVariable" className="form-control" name="variable" onChange={handleChange} value={form.variable}>

                <option value="curva1">curva1</option>
                <option value="curva2">curva2</option>
                <option value="curva3">curva3</option>
                <option value="curva4">curva4</option>
                <option value="curva5">curva5</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputFuncion">Funcion</label>
              <select id="inputFuncion" className="form-control" name="funcion" onChange={handleChange} value={form.funcion}>

                <option value="01">Suma</option>
                <option value="02">Media</option>
                <option value="03">Moda</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputIntervalo">Intervalo</label>
              <select id="inputIntervalo" className="form-control" name="intervalo" onChange={handleChange} value={form.intervalo}>

                <option value="01">1 seg</option>
                <option value="02">1 min</option>
                <option value="03">10 min</option>
                <option value="04">1 hora</option>

              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFHInicio">Fecha y Hora de inicio</label>
              <input type="datetime-local" className="form-control" id="inputFHInicio" name="hinicio" onChange={handleChange} value={form.hinicio} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputFHFinal">Fecha y Hora Final</label>
              <input type="datetime-local" className="form-control" id="inputFHFinal" name="hfinal" onChange={handleChange} value={form.hfinal} />
            </div>

          </div>
          
          <button type="submit" className="btn btn-success">Consultar</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario

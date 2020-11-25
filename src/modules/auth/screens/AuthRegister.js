import React, { useState, useContext } from "react";
import AuthContext from "../../../context/auth/authContext";
import { postRegister } from "../../../services/auth";

const AuthRegister = ({ history }) => {
  const localAuthContext = useContext(AuthContext);
  const {  iniciarSesion } = localAuthContext;

  const [formulario, setFormulario] = useState({
    username: "",
    pass1: "",
    pass2: "",
    first_name: "",
    last_name: "",
    email: "",

    error: false,
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const { username, first_name, last_name, email, pass1, pass2 } = formulario;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      first_name.trim() !== "" &&
      last_name.trim() !== "" &&
      username.trim() !== "" &&
      email.trim() !== "" &&
      pass1.trim() !== "" &&
      pass1 === pass2
    ) {
      const objUsuario = {
        ...formulario,
        password: pass1,
        is_superuser: "true",
      };
      postRegister(objUsuario).then((rpta) => {
        console.log(rpta);
        
        if (rpta.ok) {
          iniciarSesion(rpta.token);
          history.replace("/");
        }
      });
    }
  };

  return (
    <>
      <div className="card card_sesion mx-auto">
        <div className="card-header">
          <h4 className="card-title">Registrar Usuario</h4>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Nombre de usuario:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formulario.username}
              onChange={handleChange}
            />

            <label htmlFor="first_name">Nombre:</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={formulario.first_name}
              onChange={handleChange}
            />

            <label htmlFor="last_name">Apellidos:</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={formulario.last_name}
              onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formulario.email}
              onChange={handleChange}
            />

            <label htmlFor="pass1">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="pass1"
              name="pass1"
              value={formulario.pass1}
              onChange={handleChange}
            />

            <label htmlFor="pass2">Ingresa nuevamente la contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="pass2"
              name="pass2"
              value={formulario.pass2}
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary btn_sesion">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AuthRegister;

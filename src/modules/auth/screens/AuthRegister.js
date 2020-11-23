import React, { useState,useContext } from 'react'
import AuthContext from '../../../context/auth/authContext'
import { postRegister } from '../../../services/auth'

const AuthRegister = ({history}) => {
    const localAuthContext= useContext(AuthContext);
    const {autenticado,iniciarSesion}=localAuthContext;


    const [formulario, setFormulario] = useState({
        user_name: "",
        user_lastname: "",
        user_email: "",
        pass1: "",
        pass2: "",
        error: false,
    })

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,

        })
    }

    const { user_name, user_lastname, user_email, pass1, pass2 } = formulario;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (user_lastname.trim() !== "" && user_name.trim() !== "" && user_email.trim() !== "" &&
            pass1.trim() !== "" && (pass1 === pass2)) {
                const objUsuario={
                    ...formulario,
                    password:pass1,
                    user_type:"admin"
                };
                postRegister(objUsuario).then((rpta)=>{
                    console.log(rpta);
                    if (rpta.ok){
                        iniciarSesion(rpta.token);
                        history.replace("/");
                    }
                });
        }
    }

    return (
        < >
            <div className="card card_sesion mx-auto" >
                <div className="card-header">
                    <h4 className="card-title">
                        Registrar Usuario
                    </h4>

                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="Nombre">Nombre:</label>
                        <input type="text" className="form-control" id="Nombre" name="user_name" value={formulario.user_name} onChange={handleChange} />

                        <label htmlFor="apellidos">Apellidos:</label>
                        <input type="text" className="form-control" id="apellidos" name="user_lastname" value={formulario.user_lastname} onChange={handleChange} />


                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" name="user_email" value={formulario.user_email} onChange={handleChange} />

                        <label htmlFor="pass1">Contraseña:</label>
                        <input type="password" className="form-control" id="pass1" name="pass1" value={formulario.pass1} onChange={handleChange} />

                        <label htmlFor="pass2">Ingresa nuevamente la contraseña:</label>
                        <input type="password" className="form-control" id="pass2" name="pass2" value={formulario.pass2} onChange={handleChange} />

                        <button type="submit" className="btn btn-primary btn_sesion">Registrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AuthRegister

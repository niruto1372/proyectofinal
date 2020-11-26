import React, { useState, useContext } from 'react'
import AuthContext from '../../../context/auth/authContext';
import { postLogin } from '../../../services/auth';


const AuthLogin = ({history}) => {
    const localAuthContext = useContext(AuthContext);
    const { iniciarSesion } = localAuthContext;

    const [formulario, setFormulario] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit=(e)=>{
        e.preventDefault();
        postLogin(formulario.username,formulario.password).then((rpta)=>{
            if (rpta.access){
                iniciarSesion(rpta.access);
                history.replace("/");
            }
        });
    };

    return (
        < >
            <div className="card card_sesion mx-auto" >
                <div className="card-header">
                    <h4 className="card-title">
                        Iniciar Sesión
                    </h4>

                </div>
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                name="username"
                                value={formulario.username}
                                onChange={handleChange}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={formulario.password}
                                onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn_sesion">Iniciar sesión</button>

                    </form>
                </div>

            </div>


        </>
    )
}

export default AuthLogin

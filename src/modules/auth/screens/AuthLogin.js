import React, { useState, useContext } from 'react'
import AuthContext from '../../../context/auth/authContext';
import { postLogin } from '../../../services/auth';

const AuthLogin = ({ history }) => {
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

    const onSubmit = (e) => {
        e.preventDefault();
        postLogin(formulario.username, formulario.password).then((rpta) => {
            if (rpta.access) {
                iniciarSesion(rpta.access);
                history.replace("/");
            }
        });
    };

    return (
        < >
            <div className="container">
                <div className="row rowform">
                    <div className="col-lg-6 col-md-6 col-sm-6 mx-auto">
                        <div className="card card_sesion mx-auto" >
                            <div className="card-header">
                                <img src="https://www.cambio16.com/wp-content/uploads/2019/06/Industria-5.0.jpg" className="card-img-top" alt="automation" />
                            </div>
                            <div className="card-body">
                                <h4 className="card-title text-center">Iniciar Sesión </h4>
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

                                    <div className="row">
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary btn_sesion">Acceder</button>
                                        </div>
                                        <div className="col">
                                            <div className="text-center">
                                                <p className="mt-3">¿No tienes una cuenta? <a href="/auth/register">Regístrate</a> </p>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}

export default AuthLogin

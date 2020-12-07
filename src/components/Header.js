import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {

  const localAuthContext = useContext(AuthContext);
  const { id, cerrarSesion } = localAuthContext;

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark  headerBar">
        <a className="navbar-brand" href="">

          <img src="http://www.controltotal.com.pe/public/images/intranet/logo1.png" width="30" height="30" alt="" loading="lazy"></img>
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/admin">
                Detalle Alarma
              </a>
            </li>
          </ul>







          <div class="btn-group ">
            <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ID de usuario: {id}
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item" type="button">Cuenta</button>
              <button
                className="dropdown-item"
                onClick={() => {
                  cerrarSesion();
                  history.replace("/auth")
                }
                }
              >
                Cerrar sesion
              </button>
            </div>
          </div>


        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);

import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import {withRouter} from "react-router-dom";

const Header = ({history}) => {
  
  const localAuthContext = useContext(AuthContext);
  const { id,cerrarSesion } = localAuthContext;

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark  headerBar">
        <a className="navbar-brand" href="">
          CMA
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
              <a className="nav-link" href="#">
                Inicio <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alarmas
              </a>
            </li>
          </ul>
          <span className="navbar-text">id de usuario: {id} </span>
          <button 
          className="btn btn-outline-light btn-sm" 
          onClick={ () => {
             cerrarSesion();
             history.replace("/auth")
             }
            }
          >
            Cerrar sesion
          </button>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);

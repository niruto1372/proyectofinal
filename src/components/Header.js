import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { withRouter } from "react-router-dom";

const Header = ({ history }) => {

  const localAuthContext = useContext(AuthContext);
  const { id, cerrarSesion } = localAuthContext;

  return (
    <>

      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark" >
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <a className="navbar-brand" href="?#">CMA</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navigation">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Inicio <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/sistema">Variables</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/admin">
                  Detalle Variable
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/variables">
                  Detalle Variable 2 
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/cc3">
                  Coco 3
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/cizalla">
                  Cizalla
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/hc">
                  Horno Cuchara
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/admin/dashboard/he">
                  Horno Eléctrico
                </a>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" >
                  Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/">Action</a></li>
                  <li><a class="dropdown-item" href="/">Another action</a></li>
                  <li><a class="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>

            </ul>
            {/* <form>
              <div className="input-group no-border">
                <input type="text" value="" className="form-control" placeholder="Search..." />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i className="nc-icon nc-zoom-split"></i>
                  </div>
                </div>
              </div>
            </form> */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link btn-magnify" href="?#">
                  <i className="fas fa-share-alt  fa-lg"></i>
                  <p>
                    <span className="d-lg-none d-md-block"> Compartir</span>
                  </p>
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link btn-rotate" href="?#">
                  <i className="fas fa-users  fa-lg"></i>
                  <p>
                    <span className="d-lg-none d-md-block"> Cuentas</span>
                  </p>
                </a>
              </li>

              <li className="nav-item btn-rotate dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user-circle fa-lg"></i>
                  <p>
                    <span className="d-lg-none d-md-block"> Sesión iniciada</span>
                  </p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">

                  <button className="dropdown-item" type="button"> ID de usuario: {id}</button>
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
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>





  );
};

export default withRouter(Header);

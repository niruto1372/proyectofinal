import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { withRouter } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = ({ history }) => {

  const localAuthContext = useContext(AuthContext);
  const { id, cerrarSesion } = localAuthContext;

  return (
    <>



      <Navbar className="navbar2" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <div className="navbar-brand" >
            <img src="http://www.controltotal.com.pe/public/images/intranet/logo1.png" alt="" width="40" height="35" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link href="/"><p className="pnavbar">Inicio</p> </Nav.Link>

            <Nav.Link href="/admin/dashboard/sistema">Variables</Nav.Link>


            <NavDropdown title="Cizalla" >
              <NavDropdown.Item href="/admin/dashboard/cizalla/chidraulica">Central Hidráulica</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/cizalla/slimpieza">Sistema de Limpieza</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COCO 3" >
              <NavDropdown.Item href="/admin/dashboard/cc3/electrico">Eléctrico</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/cc3/hidraulico">Hidráulico</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/cc3/mecanico">Mecánico</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/cc3/proceso">Proceso</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Horno Cuchara" >
              <NavDropdown.Item href="/admin/dashboard/hc/baghouse">BagHouse</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/hc/transformador">Transformador</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Horno Eléctrico" >
              <NavDropdown.Item href="/admin/dashboard/he/ccesta">Carro Cesta</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/he/castillo">Castillo</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/he/climpieza">Cámaras Limpieza</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/he/horno">Horno</NavDropdown.Item>
              <NavDropdown.Item href="/admin/dashboard/he/hrr">HRR</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Navbar.Text>
              <ul className="navbar-nav">
                <li className="nav-item btn-rotate dropdown">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">
                    <i className="fas fa-user-circle fa-lg"></i> Perfil
                  <p>
                      <span className="d-lg-none d-md-block"> Perfil</span>
                    </p>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">

                    <p className="ml-4 text-primary">ID de usuario: {id}</p>

                    {/* <button className="dropdown-item" type="button">Mi cuenta</button> */}
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

                {/* <li className="nav-item">
                  <a className="nav-link btn-rotate" href="/">
                    <i className="fas fa-users  fa-lg"></i>
                    <p>
                      <span className="d-lg-none d-md-block"> Cuentas</span>
                    </p>
                  </a>
                </li> */}

                <li className="nav-item">
                  <a className="nav-link btn-magnify" href="/">
                    <i className="fas fa-cog"></i>
                    <p>
                      <span className="d-lg-none d-md-block"> Ajustes</span>
                    </p>
                  </a>
                </li>
              </ul>


            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </>





  );
};

export default withRouter(Header);

import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../context/auth/authContext';

const RutaPrivada = ({ path, componente: Componente }) => {
  const localAuthContext = useContext(AuthContext);
  const { autenticado, cargando } = localAuthContext;

  if (cargando) {
    return <h5>Autenticando usuario...</h5>
  } else {
    return autenticado ? (<Route path={path} component={Componente} />) : (<Redirect to={"/auth"} />)
  }

}

export default RutaPrivada;

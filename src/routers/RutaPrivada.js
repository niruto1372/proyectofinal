import React,{useContext} from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthContext from '../context/auth/authContext';

const RutaPrivada = ({ path, componente: Componente }) => {
  //const autenticado = true;
  const localAuthContext = useContext(AuthContext);
  const {autenticado}=localAuthContext;

  return autenticado ? <Route path={path} component={Componente} /> : <Redirect to ={"/auth"}/>



}

export default RutaPrivada

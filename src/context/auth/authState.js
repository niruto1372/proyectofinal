import React, {  useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    autenticado: false,
    user_name: null,
    user_id: null,
    token: null,
  });

  const iniciarSesion = (token) => {
    const payloadEnc = token.split(".")[1];

    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    
    dispatch({
      type:"INICIAR_SESION",
      data:{...payloadJSON,token},
    })
  }

  return (
    <AuthContext.Provider value={{
      autenticado: state.autenticado,
      user_name: state.user_name,
      user_id: state.user_id,
      iniciarSesion: iniciarSesion
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
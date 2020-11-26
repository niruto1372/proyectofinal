import React, { useReducer, useEffect } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";

const AuthState = (props) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    autenticado: false,
    username: null,
    id: null,
    token: null,
    cargando: true,
  });

  useEffect(() => {
    iniciarSesionConLocalStorage();
  }, [])

  const iniciarSesionConLocalStorage = () => {
    if (!localStorage.getItem("token")) return;
    const token = localStorage.getItem("token");
    const payloadEnc = token.split(".")[1];
    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    console.log(payloadJSON);

    dispatch({
      type:"INICIAR_SESION",
      data: {
        ...payloadJSON,
        token,
      }
    })

  }

  const iniciarSesion = (token) => {
    const payloadEnc = token.split(".")[1];

    const payloadDes = window.atob(payloadEnc);
    const payloadJSON = JSON.parse(payloadDes);
    console.log(payloadJSON);
    localStorage.setItem("token", token);

    dispatch({
      type: "INICIAR_SESION",
      data: { ...payloadJSON, token },
    })
  }


  const cerrarSesion=()=>{
    localStorage.removeItem("token");
    dispatch({
      type:"CERRAR_SESION",
    });
  };

  return (
    <AuthContext.Provider value={{
      autenticado: state.autenticado,
      username: state.username,
      id: state.id,
      cargando: state.cargando,
      iniciarSesion: iniciarSesion,
      cerrarSesion
    }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
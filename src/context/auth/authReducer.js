const AuthReducer = (stateActual, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        autenticado: true,
        username: action.data.username,
        id: action.data.user_id,
        token: action.data.token,
        cargando: false,
      }
    case "CERRAR_SESION":
      return{
        autenticado: false,
        username: null,
        id: null,
        token: null,
        cargando: false,
      }
    default:
      return { ...stateActual };

  }
};

export default AuthReducer;
const AuthReducer = (stateActual, action) => {
  switch (action.type) {
    case "INICIAR_SESION":
      return {
        autenticado: true,
        user_name: action.data_user_name,
        user_id: action.data.user_id,
        token:action.data.token,
      }
    default:
      return { ...stateActual };

  }
};

export default AuthReducer;
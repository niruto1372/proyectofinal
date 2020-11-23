import React from "react";

import "./App.css";
import AuthState from "./context/auth/authState";
import RouterMain from "./routers/RouterMain";



const App = () => {

  return (
   
      <AuthState>
        <RouterMain />
      </AuthState>
    
  );
};

export default App;


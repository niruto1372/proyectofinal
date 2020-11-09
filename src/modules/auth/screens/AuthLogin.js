import React from 'react'

const AuthLogin = () => {
    return (
        < >
            <div className="card card_sesion mx-auto" >
                <div className="card-header">
                    <h4 className="card-title">
                        Iniciar Sesión
                    </h4>
                    
                </div>
                <div className="card-body">
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Usuario</label>
                            <input type="input" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary btn_sesion">Iniciar sesión</button>
    
                    </form>
                </div>
                
            </div>
            

        </>
    )
}

export default AuthLogin

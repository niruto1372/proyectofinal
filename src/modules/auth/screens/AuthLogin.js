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
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                            
                        </div>
                        <div className="form-group">
                            <label for="password">Contraseña</label>
                            <input type="password" className="form-control" id="password"/>
                        </div>
                        
                        <button type="submit" className="btn btn-primary btn_sesion">Iniciar sesión</button>
    
                    </form>
                </div>
                
            </div>
            

        </>
    )
}

export default AuthLogin

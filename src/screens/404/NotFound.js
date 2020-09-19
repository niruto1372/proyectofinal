import React from 'react'

const NotFound = (props) => {
    setTimeout(()=>{
        props.history.push("/pMetalico");
    },3000);

    const goHome=()=>{
        props.history.push("/pMetalico");
    }
    
    return (
        <div>
            Página no encontrada
            <button onClick={goHome} className="btn btn-dark">goHome</button>
        </div>
    )
}

export default NotFound

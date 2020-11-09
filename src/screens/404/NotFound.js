import React from 'react'

const NotFound = (props) => {
    setTimeout(()=>{
        props.history.push("/pMetalico");
    },5);

    const goHome=()=>{
        props.history.push("/pMetalico");
    }
    
    return (
        <div>
            Redirigiendo al Home
            {/* <br/>
            <hr/>
            <button onClick={goHome} className="btn btn-dark">goHome</button> */}
        </div>
    )
}

export default NotFound

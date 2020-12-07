import React, { useState, useEffect } from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { getVariableById } from '../../../services/alarmas'
// import Formulario from '../components/Formulario'
import FormularioSingleAlarm from '../components/FormularioSingleAlarm'
import TableSingleVariable from '../components/TableSingleVariable'

const AdminDashboard = () => {
    const [curva, setCurva] = useState([]);
    const [loading, setLoading] = useState(true);
    const [curvaAconsultar,setcurvaAconsultar]=useState("");
    

    const obtenerVariable = (curvaAconsultar) => {
        getVariableById(curvaAconsultar).then((rpta) => {
            console.log(`curva a consultar: ${curvaAconsultar}`);
            setcurvaAconsultar(`${curvaAconsultar}`);
            setCurva(rpta);
            setLoading(false);
        });
    };

    useEffect(() => {
        obtenerVariable();
    }, []);

    return (<>
        <Header />
        {/* <Formulario /> */}
        <div className="row ml-0 mr-0 ">
            <div className="col-md-3 col-sm-12 mt-2">
                <FormularioSingleAlarm setcurvaAconsultar={setcurvaAconsultar} obtenerVariable={obtenerVariable}/>
            </div>
            <div className="col-md-9 col-sm-12  mt-2">
                <TableSingleVariable curva={curva} loading={loading} obtenerVariable={obtenerVariable} curvaAconsultar={curvaAconsultar} setcurvaAconsultar={setcurvaAconsultar}/>
            </div>
        </div>

        <Footer />



    </>
    )
}

export default AdminDashboard

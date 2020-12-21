import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import TableVariables from '../../../components/Main/TableVariables'

const AdminDashboardSistema = () => {
    return (
        <>
            <Header />
            <div className="row  mx-auto me-0">
                <div className="col-lg-11 col-md-11 col-sm-11  mx-auto  me-0">
                    <TableVariables />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminDashboardSistema

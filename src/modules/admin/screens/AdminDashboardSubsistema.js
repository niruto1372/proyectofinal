import React from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Sidebarm from '../components/Sidebar'

import CC3_Electrico_Motor from '../components/PorVariables/CC3_Electrico_Motor'


const AdminDashboardSubsistema = () => {
    
 

    return (
        <div>
            <div className="wrapper">
                <Sidebarm />
                <div className="main-panel">
                    <Header />
                    <div className="content">
                        <CC3_Electrico_Motor />
                        
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboardSubsistema

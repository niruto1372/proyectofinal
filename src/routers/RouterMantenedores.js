import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AdminDashboard from '../modules/admin/screens/AdminDashboard'

import MantenedoresLanding from '../modules/mantenedores/screens/MantenedoresLanding'
import DetalleAlarma from '../screens/DetalleAlarma/DetalleAlarma'

const RouterGuest = () => {
    return (
        
        <Switch>
            <Route path={"/"} component={MantenedoresLanding}/>
        </Switch>
    )
}

export default RouterGuest

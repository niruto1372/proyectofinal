import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdminDashboard from '../modules/admin/screens/AdminDashboard'
import AdminDashboardSistema from '../modules/admin/screens/AdminDashboardSistema'
import AdminDashboardSubsistema from '../modules/admin/screens/AdminDashboardSubsistema'

const RouterAdmin = () => {
    return (
        <>
            <Switch>
                
                <Route path={"/admin/dashboard/sistemasubsistema"} component={AdminDashboardSubsistema}/>
                <Route path={"/admin/dashboard/sistema"} component={AdminDashboardSistema}/>
                <Route path={"/admin/dashboard"} component={AdminDashboard}/>
                <Redirect to={"/admin/dashboard"}/>
            </Switch>
        </>
    )
}

export default RouterAdmin

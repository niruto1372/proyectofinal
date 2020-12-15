import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdminDashboard from '../modules/admin/screens/AdminDashboard'
import AdminDashboardSistema from '../modules/admin/screens/AdminDashboardSistema'
import AdminDashboardSubsistema from '../modules/admin/screens/AdminDashboardSubsistema'
import AdminDashboardCoco3 from '../modules/admin/screens/AdminDashboardCoco3'
import AdminDashboardCizalla from '../modules/admin/screens/AdminDashboardCizalla'
import AdminDashboardHc from '../modules/admin/screens/AdminDashboardHc'
import AdminDashboardHe from '../modules/admin/screens/AdminDashboardHe'

const RouterAdmin = () => {
    return (
        <>
            <Switch>
                
                <Route path={"/admin/dashboard/variables"} component={AdminDashboardSubsistema}/>
                <Route path={"/admin/dashboard/sistema"} component={AdminDashboardSistema}/>
                <Route path={"/admin/dashboard/cc3"} component={AdminDashboardCoco3}/>
                <Route path={"/admin/dashboard/cizalla"} component={AdminDashboardCizalla}/>
                <Route path={"/admin/dashboard/hc"} component={AdminDashboardHc}/>
                <Route path={"/admin/dashboard/he"} component={AdminDashboardHe}/>
                <Route path={"/admin/dashboard"} component={AdminDashboard}/>
                <Redirect to={"/admin/dashboard"}/>
            </Switch>
        </>
    )
}

export default RouterAdmin

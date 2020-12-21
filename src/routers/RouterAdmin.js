import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AdminDashboard from '../modules/admin/screens/AdminDashboard'
import AdminDashboardSistema from '../modules/admin/screens/AdminDashboardSistema'
import AdminDashboardSubsistema from '../modules/admin/screens/AdminDashboardSubsistema'
import AdminDashboardCoco3 from '../modules/admin/screens/AdminDashboardCoco3'
import AdminDashboardCizalla from '../modules/admin/screens/AdminDashboardCizalla'
import AdminDashboardHc from '../modules/admin/screens/AdminDashboardHc'
import AdminDashboardHe from '../modules/admin/screens/AdminDashboardHe'
import CC3Electrico from '../modules/admin/screens/cc3Electrico'
import CC3Hidraulico from '../modules/admin/screens/cc3Hidraulico'
import CC3Proceso from '../modules/admin/screens/cc3Proceso'
import CC3Mecanico from '../modules/admin/screens/cc3Mecanico'
import CizallaChidraulica from '../modules/admin/screens/CizallaChidraulica'
import CizallaSlimpieza from '../modules/admin/screens/CizallaSlimpieza'
import HcBaghouse from '../modules/admin/screens/HcBaghouse'
import HcTransformador from '../modules/admin/screens/HcTransformador'
import HeCarroCesta from '../modules/admin/screens/HeCarroCesta'
import HeCastillo from '../modules/admin/screens/HeCastillo'
import HeClimpieza from '../modules/admin/screens/HeClimpieza'
import HeHorno from '../modules/admin/screens/HeHorno'
import HeHrr from '../modules/admin/screens/HeHrr'

const RouterAdmin = () => {
    return (
        <>
            <Switch>
                
                <Route path={"/admin/dashboard/variables"} component={AdminDashboardSubsistema}/>
                <Route path={"/admin/dashboard/sistema"} component={AdminDashboardSistema}/>

                 <Route path={"/admin/dashboard/cc3/electrico"} component={CC3Electrico}/>
                <Route path={"/admin/dashboard/cc3/hidraulico"} component={CC3Hidraulico}/>
                <Route path={"/admin/dashboard/cc3/proceso"} component={CC3Proceso}/>
                <Route path={"/admin/dashboard/cc3/mecanico"} component={CC3Mecanico}/> 
                <Route path={"/admin/dashboard/cizalla/chidraulica"} component={CizallaChidraulica}/>
                <Route path={"/admin/dashboard/cizalla/slimpieza"} component={CizallaSlimpieza}/>
                <Route path={"/admin/dashboard/hc/baghouse"} component={HcBaghouse}/>
                <Route path={"/admin/dashboard/hc/transformador"} component={HcTransformador}/>
                <Route path={"/admin/dashboard/he/ccesta"} component={HeCarroCesta}/>
                <Route path={"/admin/dashboard/he/castillo"} component={HeCastillo}/>
                <Route path={"/admin/dashboard/he/climpieza"} component={HeClimpieza}/>
                <Route path={"/admin/dashboard/he/horno"} component={HeHorno}/>
                <Route path={"/admin/dashboard/he/hrr"} component={HeHrr}/>
                
                
                <Route path={"/admin/dashboard/cc32"} component={AdminDashboardCoco3}/>
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

import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, HashRouter
} from "react-router-dom";

import RouterAdmin from './RouterAdmin';
import RouterAuth from './RouterAuth';
import RouterMantenedores from './RouterMantenedores';
import RutaPrivada from './RutaPrivada';


const RouterMain = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/auth"} component={RouterAuth} />
                <RutaPrivada path={"/admin"} componente={RouterAdmin} />
                <RutaPrivada path={"/"} componente={RouterMantenedores} />

                {/* <Route path={"/admin"} component={RouterAdmin} />
                <Route path={"/"} component={RouterMantenedores} /> */}

            </Switch>
        </Router>
    )
}

export default RouterMain

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


const RouterMain = () => {
    return (
        <Router>
            <Switch>
                <Route path={"/auth"} component={RouterAuth} />
                <Route path={"/admin"} component={RouterAdmin} />
                <Route path={"/"} component={RouterMantenedores} />

            </Switch>
        </Router>
    )
}

export default RouterMain

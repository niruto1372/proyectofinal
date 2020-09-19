import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NotFound from '../screens/404/NotFound';
import CC3 from '../screens/Main/CC3/CC3';
import Hcuchara from '../screens/Main/hCuchara/Hcuchara';
import Helectrico from '../screens/Main/hElectrico/Helectrico';
import Pmetalico from '../screens/Main/pMetalico/Pmetalico';
import "./../App.css";

const Main = () => {
    return (
        <>
            <Router>
                <div className="headerMenu">
                    <nav className="headerMenu__nav">
                        <ul className="headerMenu__lista">
                            <li className="headerMenu__item">
                                <Link exact to={"/pMetalico"}  className="btn btn-primary headerMenu__btn">Patio Metálico</Link>
                            </li>
                            <li className="headerMenu__item">
                                <Link exact  to={"/hElectrico"}  className="btn btn-primary  headerMenu__btn">Horno Eléctrico</Link>
                            </li >
                            <li className="headerMenu__item">
                                <Link exact  to={"/hCuchara"}  className="btn btn-primary  headerMenu__btn">Horno Cuchara</Link>
                            </li>
                            <li className="headerMenu__item">
                                <Link exact  to={"/CC3"} className="btn btn-primary headerMenu__btn">CC3</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <br/>
                <Switch>
                    <Route path={"/pMetalico"} component={Pmetalico}/>
                    <Route path={"/hElectrico"} component={Helectrico}/>
                    <Route path={"/hCuchara"} component={Hcuchara}/>
                    <Route path={"/CC3"} component={CC3}/>
                    <Route component={NotFound}/>
                </Switch>
            </Router>

           
        </>
    )
}

export default Main

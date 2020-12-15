

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "../screens/404/NotFound";
import CC3 from "../screens/Main/CC3/CC3";
import Hcuchara from "../screens/Main/hCuchara/Hcuchara";
import Helectrico from "../screens/Main/hElectrico/Helectrico";
import Pmetalico from "../screens/Main/pMetalico/Pmetalico";
import MainTableAlarms from "./../components/Main/MainTableAlarms";
import "./../App.css";



const Main = () => {

  return (
    <>
      <div className="content" >
        <Router>

          <div className="row mx-auto mx-0">
            <div className="col-lg-3 col-md-3 col-sm-5 mx-automx-0">
              <Link
                exact
                to={"/pMetalico"}
                className="btn btn-info headerMenu__btn"
              >
                Patio Metálico
                </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 mx-auto mx-0">
              <Link
                exact
                to={"/hElectrico"}
                className="btn btn-info  headerMenu__btn"
              >
                Horno Eléctrico
                </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 mx-auto mx-0">
              <Link
                exact
                to={"/hCuchara"}
                className="btn btn-info  headerMenu__btn"
              >
                Horno Cuchara
                </Link>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-5 mx-auto mx-0">
              <Link
                exact
                to={"/CC3"}
                className="btn btn-info headerMenu__btn"
              >
                CC3
                </Link>
            </div>

          </div>
          <br />
          <div>
            <div className="col-lg-10 mx-auto mx-0">
              <Switch>
                <Route path={"/pMetalico"} component={Pmetalico} />
                <Route path={"/hElectrico"} component={Helectrico} />
                <Route path={"/hCuchara"} component={Hcuchara} />
                <Route path={"/CC3"} component={CC3} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>

        </Router>

        <div className="row  mx-auto mx-0">
          <div className="col-lg-10 mx-auto mx-0">
            <MainTableAlarms />
          </div>

        </div>
      </div>


    </>
  );
};

export default Main;

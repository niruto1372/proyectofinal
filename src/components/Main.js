

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
      <div className="container" >
        <Router>

          <div className="row text-center">

            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <Link

                to={"/pMetalico"}
                className="btn btn-info headerMenu__btn"
              >
                Cizalla
                </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <Link

                to={"/CC3"}
                className="btn btn-info headerMenu__btn"
              >
                Coco 3
                </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <Link

                to={"/hCuchara"}
                className="btn btn-info  headerMenu__btn"
              >
                Horno Cuchara
                </Link>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <Link

                to={"/hElectrico"}
                className="btn btn-info  headerMenu__btn"
              >
                Horno Eléctrico
                </Link>
            </div>



          </div>
          <br />
          <div>
            <div className="col-lg-12 mx-auto mx-0">
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
          <div className="col-lg-12 mx-auto mx-0">
            <MainTableAlarms />
          </div>

        </div>
      </div>


    </>
  );
};

export default Main;

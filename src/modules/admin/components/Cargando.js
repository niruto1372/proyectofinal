import React from 'react'
import { css } from "@emotion/core";
import DotLoader from "react-spinners/DotLoader";
import BarLoader from "react-spinners/BarLoader";
import PropagateLoader from "react-spinners/PropagateLoader";



class AwesomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <DotLoader
          size={40}
          color={"#053C63"}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

const Cargando = ({ type = "info", text }) => {


  const clase = `alert alert-${type}`;
  return (
    <div>
      <div className={clase} role="alert">
        <h4 className="alert-heading text-center">Cargando </h4>

        <p className="text-center">

          {text}
          <div className="css-1sspuc4">
            <AwesomeComponent />
          </div>

        </p>


      </div>
    </div>
  )
}

export default Cargando;

import React from 'react'
import DotLoader from "react-spinners/DotLoader";
// import BarLoader from "react-spinners/BarLoader";
// import PropagateLoader from "react-spinners/PropagateLoader";



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

  const clase = `alert alert-${type} alert-with-icon alert-dismissible fade show text-center`;
  return (
    <div>
      <div className={clase} role="alert" data-notify="container">
        <hr />
        <span data-notify="icon"><AwesomeComponent /></span>
        <span data-notify="message"><b> Cargando - </b> {text}</span>
        <hr />
      </div>
    </div>
  )
}

export default Cargando;

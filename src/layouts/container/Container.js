import React, { Component } from "react";
import Description from "../description/Description";
import Framework from "../framework/Framework";
import Language from "../language/Language";
import "./style.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-tdl">
        <Framework />
        <Description />
        <Language />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <div id="hiddenInput" />
      </div>
    );
  }
}

export default Container;

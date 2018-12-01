import React, { Component } from "react";
import "./style.scss";
import framework from "../../../assets/svg/framework.svg";

class Framework extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="framework"
        onContextMenu={e => {
          e.preventDefault();
        }}
      >
        <img
          className="frameworkImage"
          src={framework}
          onDragStart={e => {
            e.preventDefault();
          }}
        />
      </div>
    );
  }
}

export default Framework;

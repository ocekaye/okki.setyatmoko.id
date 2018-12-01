import React, { Component } from "react";
import Content from "../../components/content/Content";
import "./style.scss";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="description">
        <Content />
      </div>
    );
  }
}

export default Description;

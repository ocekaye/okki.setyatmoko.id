import React, { Component } from "react";
import SVG, { Path, G } from "react-svg-draw";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SVG
        className={this.props.className}
        width="5.27778in"
        height="3.42502in"
        viewBox="0 0 2269 1473"
      >
        <G>
          <Path
            className="path"
            d="M179 0l1911 0c86,0 160,61 176,146l-1131 630 -1132 -630c16,-85 90,-146 176,-146zm1911 1473l-1911 0c-99,-1 -179,-81 -179,-180l0 -1012 1105 616c9,5 19,7 30,8 10,0 20,-3 29,-8l1105 -616 0 1012c0,99 -80,179 -179,180zm0 0z"
          />
        </G>
      </SVG>
    );
  }
}

export default Email;

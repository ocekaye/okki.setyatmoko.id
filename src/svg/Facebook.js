import React, { Component } from "react";
import SVG, { Path, G } from "react-svg-draw";

class Facebook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SVG
        className={this.props.className}
        width="8.5in"
        height="8.5in"
        viewBox="0 0 11527 11527"
      >
        <G>
          <Path
            className="path"
            d="M10086 0l-8645 0c-795,0 -1441,646 -1441,1441l0 8645c0,795 646,1441 1441,1441l4323 0 0 -3962 -1441 0 0 -1801 1441 0 0 -1441c0,-1194 967,-2162 2161,-2162l1441 0 0 1801 -721 0c-397,0 -720,-37 -720,361l0 1441 1801 0 -720 1801 -1081 0 0 3962 2161 0c795,0 1441,-646 1441,-1441l0 -8645c0,-795 -646,-1441 -1441,-1441z"
          />
        </G>
      </SVG>
    );
  }
}

export default Facebook;

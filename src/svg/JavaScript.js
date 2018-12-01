import React, { Component } from "react";
import SVG, { Path, G, Polygon } from "react-svg-draw";

class Github extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SVG
        className={this.props.className}
        width="6.97347in"
        height="6.97347in"
        viewBox="0 0 943 943"
      >
        <G>
          <Path
            className="path"
            d="M712 422c-16,-47 -82,-47 -95,-8 -12,38 31,60 98,83 67,22 109,81 101,134 -8,53 -31,122 -163,122 -83,0 -129,-52 -152,-91l75 -45c0,0 25,54 73,54 48,0 68,-16 68,-53 0,-45 -156,-61 -180,-137 -24,-77 8,-186 120,-178 70,5 110,39 129,65l-74 54z"
          />
          <Path
            className="path"
            d="M363 311c0,0 0,270 0,307 0,37 -32,56 -64,50 -32,-7 -46,-45 -46,-45l-74 50c0,0 16,73 117,80 101,6 158,-55 158,-106 0,-51 0,-336 0,-336l-91 0 0 0z"
          />
          <Polygon
            className="path"
            points="0,0 0,943 891,943 892,892 51,892 51,51 891,51 891,943 943,943 943,0 "
          />
        </G>
      </SVG>
    );
  }
}

export default Github;

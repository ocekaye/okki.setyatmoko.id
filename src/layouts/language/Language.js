import React, { Component } from "react";
import "./style.scss";

import JavaScript from "../../svg/JavaScript";
import HashTag from "../../svg/Hashtag";
import Java from "../../svg/Java";
import Kotlin from "../../svg/Kotlin";

class Language extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openWeb(url) {
    window.open(url, "_blank");
  }
  render() {
    return (
      <div
        className="language"
        onContextMenu={e => {
          e.preventDefault();
        }}
        onDragStart={e => {
          e.preventDefault();
        }}
      >
        <div className="languageGrid">
          <div
            className="languageItem"
            onClick={() => this.openWeb("https://www.javascript.com")}
          >
            <JavaScript className="languageImage" />
          </div>
          <div
            className="languageItem"
            onClick={() =>
              this.openWeb(
                "https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/"
              )
            }
          >
            <HashTag className="languageImage" />
          </div>
          <div
            className="languageItem"
            onClick={() => this.openWeb("https://java.com")}
          >
            <Java className="languageImage" />
          </div>
          <div
            className="languageItem"
            onClick={() => this.openWeb("https://kotlinlang.org/")}
          >
            <Kotlin className="languageKotlin" />
          </div>
        </div>
      </div>
    );
  }
}

export default Language;

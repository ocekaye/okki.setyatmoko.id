import React, { Component } from "react";
import "./style.scss";

import Whatsapp from "../../svg/Whatsapp";
import Facebook from "../../svg/Facebook";
import Email from "../../svg/Email";
import Github from "../../svg/Github";

import { ToastContainer, toast } from "react-toastify";
import { isMobile } from "react-device-detect";

const myEmail = "okki@setyatmoko.id";
const myNumber = "85726058174";
const interNumber = `+62${myNumber}`;
const waNumber = `0${myNumber}`;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  openWeb(url) {
    window.open(url, "_blank");
  }

  copyText(value) {
    const text = document.createElement("input");
    text.id = "textInput";
    text.value = value;
    text.style.cssText = "background: transparent;border: none;color: #a32525;";
    document.getElementById("hiddenInput").appendChild(text);
    text.select();
    document.execCommand("copy");
    document
      .getElementById("hiddenInput")
      .removeChild(document.getElementById("textInput"));
  }

  sendEmail() {
    this.copyText(myEmail);

    this.notify(
      <div>
        <b>{myEmail}</b>
        <br />
        copied to clipboard!
      </div>
    );
  }

  sendWhatsapp() {
    if (isMobile) {
      this.openWeb(`https://wa.me/${interNumber}/?text=Hi%20Okki,`);
      return;
    }

    this.copyText(interNumber);

    this.notify(
      <div>
        <b>{interNumber}</b>
        <br />
        copied to clipboard!
      </div>
    );
  }

  notify(message) {
    toast(message, {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
  }
  render() {
    return (
      <div className="content">
        <div className="name">
          <h1 className="zeroMargin">Okki Setyatmoko</h1>
        </div>
        <div className="job">
          <h2 className="zeroMargin">Software Developer</h2>
        </div>
        <div className="contact">
          <span onClick={() => this.sendEmail()}>
            <Email className="svgContact" />
          </span>
          <span onClick={() => this.openWeb("https://github.com/ocekaye")}>
            <Github className="svgContact" />
          </span>
          <span onClick={() => this.sendWhatsapp()}>
            <Whatsapp className="svgContact" />
          </span>
          <span
            onClick={() =>
              this.openWeb("https://www.facebook.com/OkkyStyatmoko")
            }
          >
            <Facebook className="svgContact" />
          </span>
        </div>
      </div>
    );
  }
}

export default Content;

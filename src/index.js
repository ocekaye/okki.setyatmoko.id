import React from "react";
import ReactDOM from "react-dom";
import Main from "./layouts/main/Main";
const app = document.getElementById("app");
app ? ReactDOM.render(<Main />, app) : false;

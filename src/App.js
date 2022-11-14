import React, { Component } from "react";
import FormValidation from "./Component/FormValidation";
import "./style.css";

export default class App extends Component {
  render() {
    return (
      <div className="landing-page">
        <FormValidation/>
      </div>
    );
  }
}

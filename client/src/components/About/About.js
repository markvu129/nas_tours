import React, { Component } from "react";
import "../Main/css/Home.css";
import "./css/About.css";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <header className="about-header">
          <img
            src="https://svgshare.com/i/HBs.svg"
            alt="logo-nastours"
            border="0"
            className="l-default-logo"
          />
          <span className="l-default-slogan">
            The best offline experience in the world
          </span>
          <hr className="l-default-divider" />
        </header>
        <div className="meet-guide-section"></div>
      </div>
    );
  }
}

export default About;

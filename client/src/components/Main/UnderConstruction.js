import React, { Component } from "react";
import "./css/UnderConstruction.css";

class UnderConstruction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.fadeIn = setTimeout(() => this.setState({ visible: true }), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.fadeIn);
  }

  render() {
    return (
      <div
        className={
          this.state.visible
            ? "welcome-area fade-in under-construction-section"
            : "welcome-area under-construction-section"
        }
      >
        <header className="header">
          <img
            src="https://svgshare.com/i/HBs.svg"
            alt="logo-nastours"
            border="0"
            className="l-default-logo"
          />
          <span className="l-default-slogan">
            We Spark Conversations
          </span>
          <hr className="l-default-divider" />
        </header>

        <div className="under-construction container">
          <div className="travel-div smaller-travel-div under-construction-travel">
            <h4 className="coming-soon-title">COMING SOON</h4>
            <div className="w3-light-grey w3-round-xlarge">
              <div
                className=" w3-round-xlarge w3-blue"
                style={{ width: "75%" }}
              ></div>
            </div>
            <h3 className="preview-tour-tagline">Preview tours available</h3>
            <div className="p-index-button_block">
              <button className="ui-button ui-button-transparent p-index-button under-construction-button">
                <a href="https://www.facebook.com/thenastours/" target="_blank">
                  Sign up
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UnderConstruction;

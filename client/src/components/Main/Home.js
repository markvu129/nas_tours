import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      go_to_tour: false
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
        className={this.state.visible ? "welcome-area fade-in" : "welcome-area"}
      >
        <header className="header">
          <img
            src="/assets/img/images/nas_tours_new_logo.svg"
            alt="logo-nastours"
            border="0"
            className="l-default-logo"
          />
        </header>
        <div className="container homepage-title-container">
          <div
            className={
              this.state.go_to_tour ? "travel-div fade-out" : "travel-div"
            }
          >
            <p className="homepage-title-view-left">What are you</p>
            <div className="homepage-excited-block">
              <h4 className="homepage-title-big">EXCITED</h4>
              <p className="homepage-title-view-right">about?</p>
            </div>
            <div className="p-index-button_block">
              <a
                href="/tours/religion"
                className="ui-button ui-button-transparent p-index-button active-home-link"
              >
                Religion
              </a>
            </div>
            <div className="p-index-button_block">
              <a className="ui-button ui-button-transparent p-index-button p-index-button-no-right">
                Politics
              </a>
              <a className="ui-button ui-button-transparent p-index-button p-index-button-no-left">
                Food
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

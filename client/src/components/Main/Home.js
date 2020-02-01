import React, { Component } from "react";
import "../Tour/css/TourReligion.css";
import "./css/Home.css";
import "../Common/css/Navbar.css";

class Home extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      visible: false,
      go_to_tour: false,
      width: window.innerWidth
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fadeIn = setTimeout(() => this.setState({ visible: true }), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.fadeIn);
  }

  handleClick(route) {
    this.setState({
      go_to_tour: true
    });

    if (this.state.width > 600) {
      // Set transition for mobile
      setTimeout(() => this.props.history.push(route), 1500);
    } else {
      setTimeout(() => this.props.history.push(route), 900);
    }
  }

  render() {
    return (
      <div
        className={this.state.visible ? "welcome-area fade-in" : "welcome-area"}
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
              <button
                className="ui-button ui-button-transparent p-index-button"
                onClick={() => this.handleClick("tours/religion")}
              >
                Religion
              </button>
            </div>
            <div className="p-index-button_block">
              <button
                className="ui-button ui-button-transparent p-index-button p-index-button-no-right"
                onClick={() => this.handleClick("tours/politics")}
              >
                <a>Politics</a>
              </button>
              <button
                className="ui-button ui-button-transparent p-index-button p-index-button-no-left"
                onClick={() => this.handleClick("tours/food")}
              >
                Food
              </button>
            </div>
          </div>
          <img
            src="https://i.ibb.co/ZVvywSV/f52fbedf4ce7f378fa8c98197d59580c.png"
            alt="car"
            className={
              this.state.go_to_tour
                ? "p-index-car car-move-right"
                : "p-index-car"
            }
            border="0"
          />
        </div>
      </div>
    );
  }
}

export default Home;

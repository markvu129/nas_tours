import React, { Component } from "react";
import "./css/Home.css";
import ScrollAnimation from "react-animate-on-scroll";

class Home extends Component {
  constructor(props, context) {
    super(props);
    this.state = {
      visible: false,
      go_to_tour: false,
      width: window.innerWidth,
      skipVideo: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.skipVideo = this.skipVideo.bind(this);
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

  skipVideo(skipVideo) {
    if (skipVideo === "skip") {
      this.setState({
        skipVideo: true
      });
      if (this.state.width < 600) {
        window.scrollTo(0, 400);
      } else {
        window.scrollTo(0, 550);
      }
    } else {
      this.setState({
        skipVideo: false
      });
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div
        className={this.state.visible ? "welcome-area fade-in" : "welcome-area"}
      >
        <header className="header">
          <img
            src="/assets/img/images/logo-nastours.svg"
            alt="logo-nastours"
            border="0"
            className="l-default-logo"
          />
          <span className="l-default-slogan">We Spark Conversations</span>
          <hr className="l-default-divider" />
        </header>
        <div className="homepage-title-container">
          <div
            className={
              this.state.go_to_tour ? "travel-div fade-out" : "travel-div"
            }
          >
            <ScrollAnimation
              animateIn="fadeIn"
              offSet={0}
              delay={500}
              initiallyVisible={false}
            >
              <div className="home-video"></div>
            </ScrollAnimation>
            {!this.state.skipVideo ? (
              <div className="home-video-section">
                <a onClick={() => this.skipVideo("skip")}>
                  <button className="video-button">Skip video</button>
                </a>
              </div>
            ) : (
              <div className="home-video-section">
                <a onClick={() => this.skipVideo("goBack")}>
                  <button className="video-button">Watch video</button>
                </a>
              </div>
            )}

            <ScrollAnimation
              animateIn="fadeIn"
              offSet={-100}
              delay={500}
              initiallyVisible={false}
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
              <div className="p-index-button_block" id="home">
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
              {this.state.skipVideo && this.state.width < 600 ? (
                <div className="home-video-section">
                  <a onClick={() => this.skipVideo("goBack")}>
                    <button className="video-button">Watch video</button>
                  </a>
                </div>
              ) : (
                <div></div>
              )}
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            animateIn="fadeIn"
            offSet={0}
            delay={500}
            initiallyVisible={false}
          >
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
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Home;

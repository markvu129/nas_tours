import React, { Component } from "react";
import "./css/Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      go_to_tour: false,
      videoUrl: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    let videoUrl =
      "https://res.cloudinary.com/markvu129/video/upload/v1581072083/nas_tour_cover_vid_drhfma.mp4";
    if (window.innerWidth < 600) {
      videoUrl =
        "https://res.cloudinary.com/markvu129/video/upload/c_scale,h_750/v1581072083/nas_tour_cover_vid_drhfma.mp4";
    } else {
      videoUrl =
        "https://res.cloudinary.com/markvu129/video/upload/v1581072083/nas_tour_cover_vid_drhfma.mp4";
    }
    return (
      <div className={"welcome-area fade-in"}>
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
            <p className="homepage-title-view-left">WHAT ARE YOU</p>
            <div className="homepage-excited-block">
              <h4 className="homepage-title-big">EXCITED</h4>
              <p className="homepage-title-view-right">ABOUT?</p>
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

        <video
          id="main-video"
          className="main-video"
          autoPlay="true"
          loop="true"
          playsinline="true"
          poster=""
          muted={true}
        >
          <source id="mp4" src={videoUrl} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default Home;

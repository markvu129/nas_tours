import React, { Component } from "react";
import "./css/TourReligion.css";
import "./Testimonial";
import Testimonial from "./Testimonial";
import ImageSlider from "./Slider";
import ScrollAnimation from "react-animate-on-scroll";

class TourReligion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl:
        "https://res.cloudinary.com/markvu129/video/upload/v1580803822/nas_tours_intro_xfce4h.mov"
    };
  }

  componentWillUnmount() {
    clearTimeout(this.fadeIn);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  skipVideo() {
    window.scrollTo(0, 770);
  }

  render() {
    return (
      <div className="tour-religion">
        <div data-v-4dcd448f="" className="tour-intro">
          <div className="intro-video-wrapper">
            <video
              id="video1"
              className="intro-video"
              autoPlay="true"
              loop="true"
              playsinline="true"
              poster=""
              muted={true}
            >
              <source id="mp4" src={this.state.videoUrl} type="video/mp4" />
            </video>
            <div className="mute-div">
              <div id="mute" className="btn"></div>
            </div>
            <a
              className="video-control video-control-first js-video-control playing"
              data-video="video1"
            ></a>
            <div className="mouse" onClick={this.skipVideo}>
              <div className="mouse-wheel">
                <span className="wheel"></span>
                <span className="arrow"></span>
                <span className="arrow"></span>
              </div>
            </div>
          </div>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            offSet={10}
            delay={500}
            initiallyVisible={false}
          >
            <div className="p-tour-description testimonial">
              <h1 className="tour-intro-title">THE RACE AND RELIGION TOUR</h1>
              <div className="temple-icon-mobile">
                <img src="/assets/img/images/temple.png"></img>
              </div>
              <p className="tour-description">
                This walking tour in Singapore will show you how locals of{" "}
                <span className="testimonial-highlight">different</span> races
                and religions coexist{" "}
                <span className="testimonial-highlight">peacefully</span>. We
                will visit ethnic quarters and interact with people of various
                cultural groups. We hope this walking tour will{" "}
                <span className="testimonial-highlight">
                  spark conversations
                </span>{" "}
                and allow you to immerse in a uniquely Singaporean experience.
                <br />
              </p>
              <ul className="p-tour-description-list">
                <li className="p-tour-description-l">
                  <div className="p-tour-description-div">
                    <img
                      className="tour-description-icon"
                      src="/assets/img/images/nas_tours_schedule.svg"
                    />
                    <h3 className="p-tour-description-title">SCHEDULE</h3>
                    <p className="p-tour-description-p">WED & SAT</p>
                    <p className="p-tour-description-p p-tour-annotation">
                      10AM - 12.30PM
                    </p>
                  </div>
                </li>
                <li className="p-tour-description-l">
                  <div className="p-tour-description-div">
                    <img
                      className="tour-description-icon"
                      src="/assets/img/images/nas_tours_clock.svg"
                    />
                    <h3 className="p-tour-description-title">DURATION</h3>
                    <p className="p-tour-description-p">2.5 HOURS</p>
                    <p className="p-tour-description-p p-tour-annotation">
                      Subject to traffic conditions
                    </p>
                  </div>
                </li>
                <li className="p-tour-description-l">
                  <div className="p-tour-description-div">
                    <img
                      className="tour-description-icon"
                      src="/assets/img/images/nas_tours_ticket.svg"
                    />
                    <h3 className="p-tour-description-title">TICKETING</h3>
                    <p className="p-tour-description-p">
                      Adult: S$40 <br />
                    </p>
                    <p className="p-tour-description-p p-tour-annotation">
                      12 years old and above
                    </p>
                    <p className="p-tour-description-p p-tour-annotation"></p>
                  </div>
                </li>
                <li className="temple-icon">
                  <img src="/assets/img/images/temple.png"></img>
                </li>
              </ul>
            </div>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offSet={10}
          delay={500}
          initiallyVisible={false}
        >
          <div className="p-tour-video_description">
            <section className="p-tour-video_block">
              <div className="video-wrapper">
                <div className="p-tour-video_block-iframe_wrap"></div>
              </div>
              <img
                src="https://i.ibb.co/ZVvywSV/f52fbedf4ce7f378fa8c98197d59580c.png"
                alt=""
                className="p-tour-video_block-car"
              />
            </section>
          </div>

          <div className="p-tour-timeline-block">
            <h1>You will visit...</h1>
            <div className="p-tour-timeline">
              <div className="p-tour-timeline-wrap">
                <div className="p-tour-timeline-line"></div>
              </div>
              <div className="p-tour-timeline-text">
                <p>Little India</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Kampong Glam</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Waterloo Street</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Sikh Temple</p>
              </div>
              <div>
                <img
                  className="bus-icon"
                  src="/assets/img/images/car.jpg"
                ></img>
              </div>
            </div>

            <ul className="p-tour-description-list p-tour-timeline-mobile">
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/little_india.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    LITTLE INDIA
                  </p>
                </div>
              </li>
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/kampong.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    KAMPONG GLAM
                  </p>
                </div>
              </li>
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/waterloo_street.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    WATERLOO STREET
                  </p>
                </div>
              </li>
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/sikh_temple.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    SIKH TEMPLE
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offSet={10}
          delay={500}
          initiallyVisible={false}
        >
          <div className="p-main-perks_block">
            <h1>What your edu-tainers say...</h1>
            <Testimonial />
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default TourReligion;

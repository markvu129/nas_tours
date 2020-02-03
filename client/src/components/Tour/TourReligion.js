import React, { Component } from "react";
import "./css/TourReligion.css";
import "./Testimonial";
import Testimonial from "./Testimonial";
import ImageSlider from "./Slider";
import ExploreMore from "./ExploreMore";
import ScrollAnimation from "react-animate-on-scroll";
import FacebookPlayer from "react-facebook-player";

class TourReligion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.onPlayerReady = this.onPlayerReady.bind(this);
  }

  componentWillMount() {
    this.fadeIn = setTimeout(() => this.setState({ visible: true }), 100);
  }

  componentWillUnmount() {
    clearTimeout(this.fadeIn);
  }

  onPlayerReady(_id, player) {
    player.unmute();
  }

  render() {
    return (
      <div
        className={
          this.state.visible ? "tour-religion fade-in" : "tour-religion"
        }
      >
        <div data-v-4dcd448f="" className="tour-intro">
          <ImageSlider />
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            offSet={10}
            delay={500}
            initiallyVisible={false}
          >
            <div className="p-tour-description testimonial">
              <h1>The race and religion TOUR</h1>
              <p className="tour-description">
                On this tour, we will show you how this{" "}
                <span className="testimonial-highlight">country</span> made all
                races and religions live in peace together. We will visit ethnic
                quarters and connect with people of{" "}
                <span className="testimonial-highlight">different</span> races
                and faiths and it’s what makes Singapore unique and
                unforgettable.
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
                    <hr className="p-tour-description-divider" />
                    <p className="p-tour-description-p">MON TO SAT</p>
                    <p className="p-tour-description-p p-tour-annotation">
                      (9AM - 11AM)
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
                    <hr className="p-tour-description-divider" />
                    <p className="p-tour-description-p">2.0 HOURS</p>
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
                    <hr className="p-tour-description-divider" />
                    <p className="p-tour-description-p">
                      Adult: S$35 <br />
                      Child: S$20
                    </p>
                    <p className="p-tour-description-p p-tour-annotation">
                      (6 - 12 years old)
                    </p>
                  </div>
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
              <div className="p-tour-video_block-iframe_wrap">
                <FacebookPlayer
                  appId={880756785680649}
                  videoId={486608898507368}
                  id={`video-id-${486608898507368}`}
                  onReady={this.onPlayerReady}
                />
              </div>
              <img
                src="https://i.ibb.co/ZVvywSV/f52fbedf4ce7f378fa8c98197d59580c.png"
                alt=""
                className="p-tour-video_block-car"
              />
            </section>
          </div>

          <div className="p-tour-timeline-block">
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
                <p>City Hall</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Chinatown</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Diversity Gallery</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offSet={10}
          delay={500}
          initiallyVisible={false}
        >
          <Testimonial />
        </ScrollAnimation>
        <ScrollAnimation
          animateOnce
          animateIn="fadeIn"
          offSet={10}
          delay={500}
          initiallyVisible={false}
          className="tour-checkout-wrap"
        >
          <ExploreMore />
        </ScrollAnimation>
      </div>
    );
  }
}

export default TourReligion;

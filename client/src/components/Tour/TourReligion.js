import React, { Component } from "react";
import "./css/TourReligion.css";
import "./Testimonial";
import Testimonial from "./Testimonial";
import ImageSlider from "./Slider";
import ExploreMore from "./ExploreMore";
import ScrollAnimation from "react-animate-on-scroll";
import FacebookPlayer from "react-facebook-player";
import { Helmet } from "react-helmet";

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

  componentDidMount() {
    window.scrollTo(0, 0);
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
              <h1>THE RACE AND RELIGION TOUR</h1>
              <p className="tour-description">
                This walking tour in Singapore will show you how locals of{" "}
                <span className="testimonial-highlight">different</span> races
                and religions coexist{" "}
                <span className="testimonial-highlight">peacefully</span>. We
                will visit ethnic quarters and interact with people of various
                cultural groups. We hope this walking tour will{" "}
                <span className="testimonial-highlight">spark</span>{" "}
                conversations and allow you to immerse in a uniquely Singaporean
                experience.
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
                <p>City Hall</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Chinatown</p>
              </div>
              <div className="p-tour-timeline-text">
                <p>Sikh Temple</p>
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
                    src="/assets/img/images/destination/city_hall.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    CITY HALL
                  </p>
                </div>
              </li>
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/chinatown.png"
                  />
                  <p className="p-tour-description-p p-tour-destination-p-mobile">
                    CHINATOWN
                  </p>
                </div>
              </li>
              <li className="p-tour-description-l">
                <div className="p-tour-description-div">
                  <img
                    className="tour-description-icon p-tour-timeline-icon-mobile"
                    src="/assets/img/images/destination/tour_religion_1_small.jpg"
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
            <h1>What your edu-tainer says...</h1>
            <Testimonial />
            <div
              className="bokunButton"
              disabled
              id="bokun_676c790a_eeab_4d3a_8c70_15101027246c"
              data-src="https://widgets.bokun.io/online-sales/a186cc43-6cac-4331-b827-83773d45435d/experience/249563?partialView=1"
            >
              Join this tour
            </div>

            <Helmet>
              <script
                type="text/javascript"
                src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=a186cc43-6cac-4331-b827-83773d45435d"
                sync
              ></script>
            </Helmet>
          </div>
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

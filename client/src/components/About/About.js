import React, { Component } from "react";
import "../Main/css/Home.css";
import "./css/About.css";
import NavBar from "../Common/NavBar";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../Common/Footer";
import Testimonial from "../Home/Testimonial";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }

  render() {
    return (
      <section>
        <NavBar />
        <div data-v-4dcd448f="" className="tour-intro about-section">
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            offSet={10}
            delay={500}
            initiallyVisible={false}
          >
            <div className="p-tour-description">
              <h1>WE CREATE TOURS THAT SPEAK</h1>
              <p className="p-tour-description tagline">
                At Nas Tours, we make tours both <br />
                <span className="tour-description-highlight">edu</span>cational
                and enter
                <span className="tour-description-highlight">taining</span>
              </p>
              <button className="action-button">Learn more</button>
            </div>
            <div className="about-cover-img"></div>
          </ScrollAnimation>

          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            offSet={10}
            delay={500}
            initiallyVisible={false}
          >
            <div className="p-tour-description">
              <h1>THE TOURS</h1>
              <p>
                The idea of Nas Tours is to bring you the best tour experience
                with unconventional content. We hope to make an impact and
                difference to the world by sharing key messages with you through
                our tours
              </p>
            </div>
            <ul className="p-tour-description-list p-tour-perks">
              <li className="p-tour-perks-l">
                <img
                  className="tour-description-icon"
                  src="/assets/img/images/nas_tours_clock.svg"
                />
                <h3 className="p-tour-perks-title">100% Engaging</h3>
                <p className="p-tour-perks-description">
                  Beware! We only share <br />
                  unfiltered, sensitive content
                </p>
              </li>
              <li className="p-tour-perks-l">
                <img
                  className="tour-description-icon"
                  src="/assets/img/images/nas_tours_clock.svg"
                />
                <h3 className="p-tour-perks-title">100% Fun</h3>
                <p className="p-tour-perks-description">
                  Trust us, we do it for a living
                </p>
              </li>
              <li className="p-tour-perks-l">
                <img
                  className="tour-description-icon"
                  src="/assets/img/images/nas_tours_clock.svg"
                />
                <h3 className="p-tour-perks-title">100% Budget</h3>
                <p className="p-tour-perks-description">
                  Totally worth the money for <br /> budget-conscious travelers
                </p>
              </li>
              <li className="p-tour-perks-l">
                <img
                  className="tour-description-icon"
                  src="/assets/img/images/nas_tours_clock.svg"
                />
                <h3 className="p-tour-perks-title">100% Local</h3>
                <p className="p-tour-perks-description">
                  Tours about locals, by locals
                </p>
              </li>
            </ul>
          </ScrollAnimation>
          <ScrollAnimation
            animateOnce
            animateIn="fadeIn"
            offSet={10}
            delay={500}
            initiallyVisible={false}
          >
            <div className="p-tour-description p-meet-tour-guide p-main-perks_block">
              {this.state.width > 600 ? (
                <h1 className="meet-tour-guide-title">MEET THE EDU-TAINERS</h1>
              ) : (
                <h1 className="meet-tour-guide-title">
                  MEET THE <br />
                  EDU-TAINERS
                </h1>
              )}
              <p className="tour-description meet-tour-guide-description">
                Meet our team of Singapore's best travel veterans and guides!
              </p>
              <Testimonial />
              <div className="p-main-signup_block">
                <div className="p-main-signup_block-wrap">
                  <h1 className="meet-tour-guide-title">CONTACT US</h1>
                  <form className="ui-form p-main-signup_block-form">
                    <div className="input-div">
                      <span>Name</span>
                      <input
                        className="ui-input"
                        type="text"
                        required="true"
                        title="input"
                        placeholder="Introduce your name"
                        value=""
                      ></input>
                    </div>
                    <div className="input-div">
                      <span>Email</span>
                      <input
                        className="ui-input"
                        type="text"
                        required="true"
                        title="input"
                        placeholder="Introduce your email"
                        value=""
                      ></input>
                    </div>
                    <div className="input-div">
                      <span>Subject</span>
                      <input
                        className="ui-input"
                        type="text"
                        required="true"
                        title="input"
                        placeholder="Introduce your subject"
                        value=""
                      ></input>
                    </div>
                    <div className="input-div">
                      <span>Message</span>
                      <textarea
                        className="ui-input msg-input"
                        type="text"
                        required="true"
                        title="input"
                        placeholder="We are excited to hear from you"
                        value=""
                      ></textarea>
                    </div>
                    <button className="ui-button" type="button">
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <Footer />
      </section>
    );
  }
}

export default About;

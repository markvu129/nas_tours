/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import "./css/Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="c-footer" data-v-cedeba38="">
        <div className="c-footer-wrap" data-v-cedeba38="">
          <div className="c-footer-logo_block" data-v-cedeba38="">
            <img
              src="/assets/img/images/nas_tours_logo_footer.svg"
              alt="Nastours. The best offline experience in the world"
              className="c-footer-logo"
              data-v-cedeba38=""
            />{" "}
          </div>
          <section className="c-footer-info" data-v-cedeba38="">
            <div
              className="c-footer-info-block c-footer-about_block"
              data-v-cedeba38=""
            >
              <h4 data-v-cedeba38="">About us</h4>
              <p data-v-cedeba38="" className="c-footer-tour-description">
                We conduct walking tours in Singapore that are fun, authentic —
                <br />
                but most importantly —{" "}
                <span style={{ color: "#fbc91b", "font-weight": "bold" }}>
                  edu
                </span>
                -taining.
              </p>
            </div>
            <div className="c-footer-info-block" data-v-cedeba38="">
              <h4 data-v-cedeba38="">Contact us</h4>
              <div data-v-cedeba38="" className="c-footer-contact_link-div">
                <span className="c-footer-contact_link" data-v-cedeba38="">
                  <i className="fa fa-phone fa-5x footer-icon"></i>
                  <a href="tel:+6591517567" data-v-cedeba38="">
                    +65 9151 7567
                  </a>
                </span>
                <br />
                <span className="c-footer-contact_link" data-v-cedeba38="">
                  <a href="mailto:info@nastours.sg" data-v-cedeba38="">
                    <i className="fa fa-envelope fa-5x footer-icon"></i>
                    info@nastours.sg
                  </a>
                </span>
              </div>
            </div>
            <div
              className="c-footer-info-block c-footer-block-links terms-and-conditions-footer"
              data-v-cedeba38=""
            >
              <ul data-v-cedeba38="" className="c-footer-info-list">
                <li data-v-cedeba38="">
                  <a
                    href="/#"
                    className="c-footer-links nuxt-link-active"
                    data-v-cedeba38=""
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li data-v-cedeba38="">
                  <a href="/#" className="c-footer-links" data-v-cedeba38="">
                    Privacy Policy
                  </a>
                </li>
                <li data-v-cedeba38="">
                  <a href="/faq" className="c-footer-links" data-v-cedeba38="">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div className="c-footer-info-block footer-icon" data-v-cedeba38="">
              <ul data-v-cedeba38="" className="footer-icon-list">
                <li>
                  <a
                    href="https://www.tripadvisor.com.sg/Attraction_Review-g294265-d19699980-Reviews-Nas_Tours-Singapore.html"
                    className="c-footer-social c-footer-social-tripadviser"
                    target="_blank"
                  >
                    <img
                      className="footer-img"
                      src="https://svgshare.com/i/HA0.svg"
                    ></img>
                  </a>
                </li>
                <li data-v-cedeba38="">
                  <a
                    href="https://www.facebook.com/Nas-Tours-104146571094831/"
                    className="c-footer-social c-footer-social-facebook"
                    data-v-cedeba38=""
                    target="_blank"
                  >
                    <img
                      className="footer-img"
                      src="https://svgshare.com/i/HA1.svg"
                    ></img>
                  </a>
                </li>
                <li data-v-cedeba38="">
                  <a
                    href="https://www.instagram.com/nasdaily"
                    className="c-footer-social c-footer-social-instagram"
                    data-v-cedeba38=""
                    target="_blank"
                  >
                    <img
                      className="footer-img"
                      src="https://svgshare.com/i/HA2.svg"
                    ></img>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </footer>
    );
  }
}

export default Footer;

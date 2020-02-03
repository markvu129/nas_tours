import React, { Component } from "react";
import "./css/Testimonial.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Helmet } from "react-helmet";

class Testimonial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = [
      {
        image: "/assets/img/images/tat_yam.jpg",
        text:
          "Let us show you how Singaporeans fight segragation daily to become one of the world's most diverse societies",
        author: "TY - Co-founder"
      },
      {
        image: "/assets/img/images/tat_yam.jpg",
        text:
          "Let us show you how Singaporeans fight segragation daily to become one of the world's most diverse societies",
        author: "TY - Co-founder"
      }
    ];

    return (
      <div className="p-main-perks_block">
        <h1>What your tour guide says...</h1>

        <div className="testimonial-container">
          <div className="testimonial-div">
            <Slider className="slider-wrapper" infinite={true} autoplay={2000}>
              {content.map((item, index) => (
                <div className="tour-guide-div">
                  <div className="arrow-prev"></div>
                  <div className="tour-guide-msg">
                    {item.text} <br />
                    <br />
                    {item.author}
                  </div>
                  <img className="tour-guide-img" src={item.image} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

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
    );
  }
}

export default Testimonial;

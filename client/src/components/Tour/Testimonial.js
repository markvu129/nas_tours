import React, { Component } from "react";
import "./css/Testimonial.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

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
      <div className="testimonial-container">
        <div className="testimonial-div">
          <Slider className="slider-wrapper" infinite={true}>
            {content.map(item => (
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
    );
  }
}

export default Testimonial;

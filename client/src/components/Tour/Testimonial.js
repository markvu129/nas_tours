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
        image: "/assets/img/images/tour_guide/tour_guide.png",
        text:
          "Learn to appreciate and embrace the differences between races and religions. " +
          "You'll be amazed by the perspectives that this tour can bring you.",
        image_small: "/assets/img/images/tour_guide/tour_guide_small.png",

        author: "Jan Chow - Tour Guide"
      },
      {
        image: "/assets/img/images/tour_guide/tour_guide_3.png",
        text:
          "This tour is not for the casual tourist! Come interact with us and get real, authentic insights to life in Singapore.",
        author: "Kyanta Yap - Tour Guide",
        image_small: "/assets/img/images/tour_guide/tour_guide_small_3.png"
      },
      {
        image: "/assets/img/images/tour_guide/tour_guide_2.png",
        text:
          "We're going to change your mind about what is possible, for people of different beliefs to live together.",
        author: "Byron Koh - Tour Guide",
        image_small: "/assets/img/images/tour_guide/tour_guide_small_2.png"
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
                  <img
                    className="tour-guide-img-small"
                    src={item.image_small}
                  />
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

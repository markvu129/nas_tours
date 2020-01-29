import React, { Component } from "react";
import "./css/Slider.css";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const content = [
      {
        image: "/assets/img/images/tour_religion_2.jpg"
      },
      {
        image: "/assets/img/images/tour_religion_1.jpg"
      },
      {
        image: "/assets/img/images/tour_religion_3.jpg"
      },
      {
        image: "/assets/img/images/tour_religion_4.jpg"
      },
      {
        image: "/assets/img/images/tour_religion_5.jpg"
      }
    ];
    return (
      <Slider className="slider-wrapper" infinite={true} autoplay={2000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`
            }}
          ></div>
        ))}
      </Slider>
    );
  }
}

export default ImageSlider;

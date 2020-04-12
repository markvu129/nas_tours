/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import "./css/TourGuide.css";

class TourGuideDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-guide-section">
        <h1 className="tour-guide-title">
          Hi, I&apos;m Byron! Welcome to my City Tour
        </h1>
        <div className="tour-guide-info">
          <div className="tour-guide-info-list">
            <img
              className="tour-guide-info-img"
              src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
            />
          </div>
          <div className="tour-guide-info-list">
            <div className="tour-guide-icon-section">
              <div className="tour-guide-icon">
                <img
                  className="tour-guide-icon-img"
                  src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
                />
                <p className="tour-guide-icon-desc">I speak English</p>
              </div>
              <div className="tour-guide-icon">
                <img
                  className="tour-guide-icon-img"
                  src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
                />
                <p className="tour-guide-icon-desc">I drive a 4 seater</p>
              </div>
              <div className="tour-guide-icon">
                <img
                  className="tour-guide-icon-img"
                  src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
                />
                <p className="tour-guide-icon-desc">I love food and music</p>
              </div>
              <div className="tour-guide-icon">
                <img
                  className="tour-guide-icon-img"
                  src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
                />
                <p className="tour-guide-icon-desc">Famous religious places</p>
              </div>
            </div>
            <div className="tour-guide-icon-section">
              <p className="tour-info-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="tour-guide-cta">
                <button className="tour-guide-cta-click">BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-guide-info">
          <div className="tour-guide-info-list">
            <div className="tour-guide-destination-section">
              <h1 className="tour-guide-title">What you will see</h1>
              <p className="tour-info-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          <div className="tour-guide-info-list">
            <ul className="tour-info-destination-list">
              <li>Example 1</li>
              <li>Example 2</li>
              <li>Example 3</li>
              <li>Example 4</li>
              <li>Example 5</li>
              <li>Example 6</li>
              <li>Example 7</li>
              <li>Example 8</li>
              <li>Example 9</li>
            </ul>
          </div>
        </div>
        <h1 className="tour-guide-title">Take a quick peek</h1>
        <div className="tour-guide-info">
          <div className="tour-guide-quick-peek">
            <img
              className="tour-guide-quick-peek-img"
              src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
            />
          </div>
          <div className="tour-guide-quick-peek">
            <img
              className="tour-guide-quick-peek-img"
              src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
            />
          </div>
          <div className="tour-guide-quick-peek">
            <img
              className="tour-guide-quick-peek-img"
              src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
            />
          </div>
          <div className="tour-guide-quick-peek">
            <img
              className="tour-guide-quick-peek-img"
              src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
            />
          </div>
        </div>
        <h1 className="tour-guide-title">Reviews</h1>
      </section>
    );
  }
}

export default TourGuideDescription;

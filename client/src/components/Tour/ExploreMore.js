import React, { Component } from "react";
import "./css/TourReligion.css";
import "./css/ExploreMore.css";
import { Link } from "react-router-dom";
class ExploreMore extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="p-tour-description explore-more-section">
        <h1 className="explore-more-title">
          More exciting <span className="yellow-color">tours</span> coming soon{" "}
        </h1>
        <ul className="p-tour-description-list explore-more-list">
          <li className="p-tour-description-l explore-more-l">
            <div className="p-tour-description-div explore-more-div">
              <a>
                <img
                  className="explore-more-img"
                  src="/assets/img/images/build_nation_tour.jpg"
                />
              </a>
              <h3 className="p-tour-description-title explore-more-div-title">
                "HOW TO BUILD A COUNTRY" TOUR
              </h3>
            </div>
          </li>
          <li className="p-tour-description-l explore-more-l">
            <div className="p-tour-description-div explore-more-div">
              <a>
                <img
                  className="explore-more-img"
                  src="/assets/img/images/food_tour.jpg"
                />
                <h3 className="p-tour-description-title explore-more-div-title">
                  "THE SINGAPORE FOOD" TOUR
                </h3>
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ExploreMore;

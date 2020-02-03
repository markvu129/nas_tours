import React, { Component } from "react";
import "./css/TourReligion.css";
import "./css/ExploreMore.css";
import { Link } from "react-router-dom";
import history from "../../modules/history";

class ExploreMore extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(route) {
    history.push(route);
  }

  render() {
    return (
      <div className="p-tour-description explore-more-section">
        <h1 className="explore-more-title">You may also be interested in</h1>
        <ul className="p-tour-description-list explore-more-list">
          <li className="p-tour-description-l explore-more-l">
            <div className="p-tour-description-div explore-more-div">
              <Link to="/tours/politics">
                <img
                  className="explore-more-img"
                  src="/assets/img/images/tour_religion_2.jpg"
                />
              </Link>
              <h3
                className="p-tour-description-title explore-more-div-title"
                onClick={() => this.handleClick("/tours/politics")}
              >
                "HOW TO BUILD A COUNTRY" TOUR
              </h3>
            </div>
          </li>
          <li className="p-tour-description-l explore-more-l">
            <div className="p-tour-description-div explore-more-div">
              <Link to="/tours/food">
                <img
                  className="explore-more-img"
                  src="/assets/img/images/tour_religion_3.jpg"
                />
                <h3
                  className="p-tour-description-title explore-more-div-title"
                  onClick={() => this.handleClick("/tours/food")}
                >
                  "THE SINGAPORE FOOD" TOUR
                </h3>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ExploreMore;

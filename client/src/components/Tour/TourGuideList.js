/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import "./css/TourGuideList.css";
import { MainMap } from "./MainMap";

class TourGuideList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMarkerShown: false,
      lat: -34.397,
      lng: 150.644
    };
    this.handleMarkerClick = this.handleMarkerClick.bind(this);
    this.delayedShowMarker = this.delayedShowMarker.bind(this);
    this.printLocation = this.printLocation.bind(this);
  }

  componentDidMount() {
    this.delayedShowMarker();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.printLocation);
    }
  }

  printLocation(position) {
    console.log(position);
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
  }

  shouldComponentUpdate(nextState) {
    return this.state.lat !== nextState.lat || this.state.lng !== nextState.lng;
  }

  delayedShowMarker() {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  }

  handleMarkerClick() {
    this.setState({ isMarkerShown: false });
    this.delayedShowMarker();
  }

  render() {
    return (
      <section className="tour-guide-list-section">
        <div className="tour-guide-list">
          <ul className="tour-guide-l">
            <li>
              <a className="tour-guide-link" href="/tours/abc123">
                <img
                  className="tour-guide-list-img"
                  src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
                />
                <p className="tour-guide-list-desc-title">Example Tour</p>
                <p className="tour-guide-list-desc">
                  Sunny is a very cool guide
                </p>
              </a>
            </li>
            <li>
              <a className="tour-guide-link" href="/tours/abc123">
                <img
                  className="tour-guide-list-img"
                  src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
                />
                <p className="tour-guide-list-desc-title">Example Tour</p>
                <p className="tour-guide-list-desc">
                  Sunny is a very cool guide
                </p>
              </a>
            </li>
            <li>
              <a className="tour-guide-link" href="/tours/abc123">
                <img
                  className="tour-guide-list-img"
                  src="https://res.cloudinary.com/doaxab4ly/image/upload/v1586526390/sg_tour_guide_yuv8r1.jpg"
                />
                <p className="tour-guide-list-desc-title">Example Tour</p>
                <p className="tour-guide-list-desc">
                  Sunny is a very cool guide
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className="tour-guide-list">
          <MainMap
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAlGIfqkSJY1UydliakfX1Dv__v2lqnuPk&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            lat={this.state.lat}
            lng={this.state.lng}
          />
        </div>
      </section>
    );
  }
}
export default TourGuideList;

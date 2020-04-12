/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import TourGuideDescription from "./TourGuideDescription";

class TourGuide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-religion-section">
        <NavBar />
        <TourGuideDescription />
        <Footer />
      </section>
    );
  }
}
export default TourGuide;

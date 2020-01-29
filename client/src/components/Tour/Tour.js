/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import TourReligion from "./TourReligion";
import Footer from "../Common/Footer";

class Tour extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-religion-section">
        <NavBar />
        <TourReligion />
        <Footer />
      </section>
    );
  }
}
export default Tour;

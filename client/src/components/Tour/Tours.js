/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import TourFilter from "./TourFilter";
import TourGuideList from "./TourGuideList";

class Tours extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-religion-section">
        <NavBar />
        <TourFilter />
        <TourGuideList />
        <Footer />
      </section>
    );
  }
}
export default Tours;

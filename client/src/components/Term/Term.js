import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import TermSection from "./TermSection";

class Term extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-religion-section">
        <NavBar />
        <TermSection />
        <Footer />
      </section>
    );
  }
}

export default Term;

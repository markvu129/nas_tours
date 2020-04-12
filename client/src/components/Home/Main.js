/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Index from "./Index";
import Footer from "../Common/Footer";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-religion-section">
        <NavBar />
        <Index />
        <Footer />
      </section>
    );
  }
}
export default Main;

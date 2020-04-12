/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import "./css/TourBenefits.css";

class Benefits extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="tour-benefits-section">
        <h1 className="tour-benefits-title">Why Nas Tours is different?</h1>
        <div className="tour-benefits-list">
          <div className="tour-benefits">
            <img
              className="tour-benefits-icon"
              src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
            />
            <p className="tour-benefits-desc">Truly local example etc</p>
          </div>
          <div className="tour-benefits">
            <img
              className="tour-benefits-icon"
              src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
            />
            <p className="tour-benefits-desc">Flexibility with a car</p>
          </div>
          <div className="tour-benefits">
            <img
              className="tour-benefits-icon"
              src="https://d26p6gt0m19hor.cloudfront.net/packs/media/images/static-pages/about/100-80c1fb27ac644013cb11688762cb3aec.png"
            />
            <p className="tour-benefits-desc">
              More affordable than private tour
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Benefits;

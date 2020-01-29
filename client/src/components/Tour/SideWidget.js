/**
 * Created by markvu129 on 8/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import "./css/SiteWidget.css";

class SideWidget extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <aside className="is-sticky-bar not-top is-sticky" id="is-sticky-bar">
        <div className="sticky-bar-div">
          <div
            className="btn-book-tour bokunButton"
            disabled
            id="bokun_676c790a_eeab_4d3a_8c70_15101027246c"
            data-src="https://widgets.bokun.io/online-sales/a186cc43-6cac-4331-b827-83773d45435d/experience/249563?partialView=1"
          >
            <a className="gtm-event-book-this-tour">Book this tour</a>
          </div>
          <div className="bloc-prices for-3-col">
            <div className="early-price">
              Early price: <span className="early-price-tag">$35</span>
            </div>
          </div>
          <div className="usual-price"> UP: $45</div>
          <div className="bloc-duration-meeting">
            <button
              className="aligncenter btn gtm-event-click-availabilities bokunButton"
              disabled
              id="bokun_676c790a_eeab_4d3a_8c70_15101027246c"
              data-src="https://widgets.bokun.io/online-sales/a186cc43-6cac-4331-b827-83773d45435d/experience/249563?partialView=1"
            >
              Check Availabilities
            </button>
          </div>
        </div>
      </aside>
    );
  }
}

export default SideWidget;

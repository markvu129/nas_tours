/**
 * Created by markvu129 on 14/2/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import TermList from "./TermList";

class TermSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tour-religion">
        <div data-v-4dcd448f="" className="tour-intro term-section">
          <TermList />
        </div>
      </div>
    );
  }
}

export default TermSection;

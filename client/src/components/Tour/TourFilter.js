/**
 * Created by markvu129 on 9/1/20 on
 * Includes module purpose here
 */

import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import DatePicker from "react-datepicker";
import "./css/TourFilter.css";

class TourFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterDate: null
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    this.setState({
      filterDate: date
    });
  }

  shouldComponentUpdate(nextState) {
    return this.state.filterDate !== nextState.filterDate;
  }

  render() {
    const countryOptions = ["Singapore"];

    const seatOptions = ["4 seats", "10 seats"];

    return (
      <section className="tour-filter">
        <div className="tour-filter-div">
          <Dropdown
            options={countryOptions}
            onChange={this._onSelect}
            value="Select country"
            placeholder="Select country"
          />
        </div>
        <div className="tour-filter-div tour-filter-date-div">
          <DatePicker
            placeholderText="Select available date"
            selected={this.state.filterDate}
            onChange={this.handleDateChange}
          />
        </div>
        <div className="tour-filter-div select-car-filter-div">
          <Dropdown
            options={seatOptions}
            onChange={this._onSelect}
            value="Car type"
            placeholder="Car type"
          />
        </div>
        <div className="tour-filter-div">
          <button className="filter-description-button">Search</button>
        </div>
      </section>
    );
  }
}
export default TourFilter;

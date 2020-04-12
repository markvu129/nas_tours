import React, { Component } from "react";
import "./css/HomeDescription.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class HomeDescription extends Component {
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
    return (
      <div>
        <div className="home-description">
          <h1 className="home-description-title">
            We connect you to locals with cars, <br />
            for the best tours ever.
          </h1>
          <p className="home-description-detail">
            Enjoy an amazing time with local host, explore his <br />
            favorite places and hidden gems in his car
          </p>
          <div className="date-filter">
            <DatePicker
              placeholderText="Select available date"
              selected={this.state.filterDate}
              onChange={this.handleDateChange}
            />
            <button className="home-description-button">Search</button>
          </div>
        </div>
        <div className="home-description white">
          <h1 className="home-description-title">
            You can cover much more
            <br />
            with a car.
          </h1>
          <p className="home-description-detail">
            Walking tours are great, but car tours are much better. Travel
            around in comfort, see more, and get off the explore what you want.
          </p>
        </div>
        <div className="home-description text-align-right">
          <h1 className="home-description-price-title ">
            You save more without private tours
          </h1>
          <p className="home-description-price-detail">
            We are the middle ground between a taxi and a travel operator <br />
            You get the benefits of a car tour without burning a hole in your
            pocket
          </p>
        </div>
      </div>
    );
  }
}

export default HomeDescription;

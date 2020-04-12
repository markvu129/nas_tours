import React, { Component } from "react";
import "./css/Main.css";
import { MainVideo } from "./Main_Video";
import HomeDescription from "./HomeDescription";
import Benefits from "./Benefits";

class Index extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="tour-religion">
        <MainVideo />
        <HomeDescription />
        <Benefits />
      </div>
    );
  }
}

export default Index;

import React, { Component } from "react";
import NavBar from "../Common/NavBar";
import Footer from "../Common/Footer";
import LoginForm from "./LoginForm";
import "./css/Authentication.css";

class Authentication extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="">
        <NavBar />
        <div className="authentication-section">
          <LoginForm />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Authentication;

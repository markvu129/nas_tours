import React, { Component } from "react";
import "./css/Navbar.css";
import history from "../../modules/history";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleNav: false
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar() {
    const currentToggleNav = this.state.toggleNav;
    this.setState({
      toggleNav: !currentToggleNav
    });
  }

  render() {
    return (
      <nav
        className={
          history.location.pathname !== "/about"
            ? "navbar"
            : "navbar navbar-about"
        }
      >
        <a href="/" className="logo">
          <img
            alt="Nastours - a unique travel car with a way"
            src="/assets/img/images/nas_tours_logo_main.svg"
            className="l-tour-logo logo-navbar"
          />
        </a>

        <label
          className="navbar-toggle"
          id="js-navbar-toggle"
          onClick={this.toggleNavbar}
        >
          <i className="fa fa-bars"></i>
        </label>
        <ul
          className={this.state.toggleNav ? "main-nav mobile-nav" : "main-nav"}
          id="js-menu"
        >
          <a className="close" onClick={this.toggleNavbar} />
          <li>
            <a href="/" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a
              href="/tours"
              className={
                history.location.pathname === "/tours"
                  ? "nav-links nav-links-active"
                  : "nav-links"
              }
            >
              Tours
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className={
                history.location.pathname === "/faq"
                  ? "nav-links nav-links-active"
                  : "nav-links"
              }
            >
              FAQs
            </a>
          </li>
          <li className="signin-item">
            <a href="/login">
              <button className="signin-btn">Sign in</button>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;

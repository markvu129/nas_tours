import React, { Component } from "react";
import "./css/Navbar.css";
import { Helmet } from "react-helmet";

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

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <nav className="navbar">
        <a href="/" className="logo">
          <img
            alt="Nastours. The best offline experience in the world"
            src="https://svgshare.com/i/HBs.svg"
            className="l-tour-logo logo-navbar"
          />
        </a>
        <div
          className="bokunButton"
          disabled
          id="bokun_676c790a_eeab_4d3a_8c70_15101027246c"
          data-src="https://widgets.bokun.io/online-sales/a186cc43-6cac-4331-b827-83773d45435d/experience/249563?partialView=1"
        >
          Book now
        </div>
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
            <a href="/about" className="nav-links">
              About
            </a>
          </li>
          <li>
            <a href="/tours/religion" className="nav-links">
              Tours
            </a>
          </li>
        </ul>

        <Helmet>
          <script
            type="text/javascript"
            src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=a186cc43-6cac-4331-b827-83773d45435d"
            sync
          ></script>
        </Helmet>
      </nav>
    );
  }
}

export default NavBar;

import React, { Component } from "react";
import "./css/Navbar.css";
import { Helmet } from "react-helmet";
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

  componentDidMount() {
    this.forceUpdate();
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
            alt="Nastours. The best offline experience in the world"
            src="/assets/img/images/logo-nastours.svg"
            className="l-tour-logo logo-navbar"
          />
        </a>
        {history.location.pathname !== "/about" ? (
          <div
            className="bokunButton"
            disabled
            id="bokun_676c790a_eeab_4d3a_8c70_15101027246c"
            data-src="https://widgets.bokun.io/online-sales/a186cc43-6cac-4331-b827-83773d45435d/experience/249563?partialView=1"
          >
            Book now
          </div>
        ) : (
          <div></div>
        )}

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
          {/*<li>*/}
          {/*  <a*/}
          {/*    href="/about"*/}
          {/*    className={*/}
          {/*      history.location.pathname === "/about"*/}
          {/*        ? "nav-links nav-links-active"*/}
          {/*        : "nav-links"*/}
          {/*    }*/}
          {/*  >*/}
          {/*    About*/}
          {/*  </a>*/}
          {/*</li>*/}
          <li>
            <a
              href="/tours/religion"
              className={
                history.location.pathname === "/tours/religion"
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

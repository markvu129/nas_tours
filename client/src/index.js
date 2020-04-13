import React from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import App from "./components/App/App";
import Main from "./components/Home/Main";
import history from "./modules/history.js";
import Term from "./components/Term/Term";
import Tours from "./components/Tour/Tours";
import TourGuide from "./components/Tour/TourGuide";
import Authentication from "./components/Authentication/Authentication";

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/tours" component={Tours} />
        <Route exact path="/tours/:tour_guide_id" component={TourGuide} />
        <Route exact path="/faq" component={Term} />
        <Route exact path="/login" component={Authentication} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);

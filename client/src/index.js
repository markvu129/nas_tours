import React from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import App from "./components/App/App";
import Tour from "./components/Tour/Tour";
import history from "./modules/history.js";
import UnderConstruction from "./components/Main/UnderConstruction";
import Home from "./components/Main/Home";
import About from "./components/About/About";

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tours/religion" component={Tour} />
        <Route exact path="/tours/politics" component={UnderConstruction} />
        <Route exact path="/tours/food" component={UnderConstruction} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);

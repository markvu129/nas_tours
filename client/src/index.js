import React from "react";
import { render } from "react-dom";
import { Route, Router, Switch } from "react-router-dom";
import App from "./components/App/App";
import Tour from "./components/Tour/Tour";
import history from "./modules/history.js";
import Home from "./components/Main/Home";
import About from "./components/About/About";
import Term from "./components/Term/Term";
import ReactPixel from "react-facebook-pixel";

ReactPixel.init("121961745898315", {}, { debug: true, autoConfig: false });
ReactPixel.pageView();
ReactPixel.fbq("track", "PageView");

render(
  <Router history={history}>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/tours/religion" component={Tour} />
        <Route exact path="/faq" component={Term} />
      </Switch>
    </App>
  </Router>,
  document.getElementById("app")
);

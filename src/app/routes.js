import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/results/:searchTerms/:page" component={Home} />
      <Route path="/:id" component={Book} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default Routes;

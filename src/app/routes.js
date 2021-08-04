import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Book from "./pages/Book/Book";

import ProviderContexts from "./contexts/ProviderContexts";

const Routes = () => (
  <Router>
    <Switch>
      <ProviderContexts>
        <Route path="/results/:searchTerms/:page" exact component={Home} />
        <Route path="/:id" exact component={Book} />
        <Route path="/" exact component={Home} />
      </ProviderContexts>
    </Switch>
  </Router>
);

export default Routes;

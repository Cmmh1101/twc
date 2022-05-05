import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import HomePage from "../views/homepage/HomePage";
import TechPaths from "../views/techpaths/TechPaths";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />

        <Route path="/techpaths" component={TechPaths} exact />

        {/* all new routes should be added above */}
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRouter;

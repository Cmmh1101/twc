import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import CareerTest from "../views/careertest/CareerTest";
import HomePage from "../views/homepage/HomePage";


const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/careertest" component={CareerTest} exact />

        {/* all new routes should be added above */}
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRouter;

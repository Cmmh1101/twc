import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import HomePage from "../views/homepage/HomePage";

const AppRouter = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={HomePage} exact />

        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default AppRouter;

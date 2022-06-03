import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import HomePage from "../views/homepage/HomePage";
import TechPaths from "../views/techpaths/TechPaths";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        {/* <Route />
                <Route />
                <Route />
                 */}
      </Routes>
      {/* <Switch>
        <Route path="/" component={HomePage} exact />

        <Route path="/techpaths" component={TechPaths} exact />

        
        <Route component={NotFoundPage} />
        <Redirect to="/" />
      </Switch> */}
    </>
  );
};

export default AppRouter;

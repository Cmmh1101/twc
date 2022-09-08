import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Redirect, Route, Switch } from "react-router-dom";
import NotFoundPage from "../views/404page";
import HomePage from "../views/homepage/HomePage";
import TechPaths from "../views/techpaths/TechPaths";
import ResourcesPage from "../views/resourcespage/ResourcesPage";
import BlogsPage from "../views/blogspage/BlogsPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="techpaths" element={<TechPaths />} />
        <Route path="Resources" element={<ResourcesPage />} />
        <Route path="blogspage" element={<BlogsPage />} />
      </Routes>
    </>
  );
};

export default AppRouter;

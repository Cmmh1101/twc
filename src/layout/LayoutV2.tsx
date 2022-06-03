import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./../layout/components/Footer";
import TopNavbar from "./../layout/components/TopNavbar";
import HomePage from "./../views/homepage/HomePage";
import NotFoundPage from "../views/404page";
import AppRouter from "../router/AppRouter";

const AppLayout = () => {
  return (
    <>
      <TopNavbar />
      <AppRouter />
      <Footer />
    </>
  );
};

export default AppLayout;

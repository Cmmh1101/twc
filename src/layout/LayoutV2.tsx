import React from "react";
import Footer from "./../layout/components/Footer";
import TopNavbar from "./../layout/components/TopNavbar";
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

import React from "react";
import Footer from "./../layout/components/Footer";
import TopNavbar from "./../layout/components/TopNavbar";
import AppRouter from "../router/AppRouter";
import { useTheme } from "../provider/ThemeModeProvider";

const AppLayout = () => {
  const { dark, light, darkMode } = useTheme();

  return (
    <>
      <TopNavbar />
      <main
        className="main"
        style={
          darkMode
            ? { color: light, backgroundColor: dark }
            : { color: dark, backgroundColor: light }
        }
      >
        <AppRouter />
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;

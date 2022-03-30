import React from "react";
import { Container } from "reactstrap";
import { useTheme } from "../provider/ThemeModeProvider";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavbar";

const Layout = () => {
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
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import { Container } from "reactstrap";
import AppRouter from "../router/AppRouter";
import Footer from "./components/Footer";
import TopNavbar from "./components/TopNavbar";

interface Props {}

const Layout = (props: Props) => {
  return (
    <>
      <TopNavbar />
      <main className="main">
        <Container fluid className="p-0">
          <AppRouter />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;

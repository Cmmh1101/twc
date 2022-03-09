import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import Layout from "./layout/Layout";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className="app" data-testid="app">
      <Router>
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

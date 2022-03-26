import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "./styles/styles.css";
import AppLayout from "./layout/LayoutV2";
import ScrollToTop from "./ScrollToTop";



function App() {
  return (
    <div className="app" data-testid="app">
      <Router>
        <ScrollToTop>
          <AppLayout />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;

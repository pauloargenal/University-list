import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppHeader, Footer } from "./components";
import Routes from "./Routes";
import "./App.scss";

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes />
      <Footer />
    </Router>
  );
}

export default App;

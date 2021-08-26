import React, { useEffect } from "react";
import { fetchUniversities } from "./api";
import { BrowserRouter as Router } from "react-router-dom";
import { AppHeader } from "./components";
import Routes from "./Routes";
import "./App.scss";

function App() {
  useEffect(async () => {
    const uni = await fetchUniversities();
    console.log(uni);
  }, []);
  return (
    <Router>
      <AppHeader />
      <Routes />
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppHeader, Footer } from "./components";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Routes from "./Routes";
import "./App.scss";

function App() {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["IBM Plex Sans"].join(",")
    }
  });
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <AppHeader />
        <Routes />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import Drawer from "./Drawer";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { HashRouter as Router } from "react-router-dom";
import { useEffect } from "react";

export default function () {
  const [darkState, setDarkState] = useState(
    () => JSON.parse(localStorage.getItem("dark")) || false
  );

  const palletType = darkState ? "dark" : "light";
  const theme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: darkState ? "#242526" : "#2089dc",
      },
    },
  });

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkState));
  }, [darkState]);

  return (
    <ThemeProvider theme={theme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Drawer darkState={darkState} handleThemeChange={handleThemeChange} />
      </Router>
    </ThemeProvider>
  );
}

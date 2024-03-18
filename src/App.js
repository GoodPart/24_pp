import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

const darkTheme = {
  textColor: "#ddd",
  backgroundColor: "rgba(68, 68, 68, 0.6)",
  linearGradientColor:
    "linear-gradient(131deg,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)",
  borderColor: "1px solid rgba(255, 255, 255, 0.1)",
};
const lightTheme = {
  textColor: "#444",
  backgroundColor: "rgba(255,255,255, 0.6)",
  linearGradientColor:
    "linear-gradient(131deg, rgba(65,61,63,1) 0%, rgba(29,57,91,1) 100%)",
  borderColor: "1px solid rgba(68, 68, 68, 0.18)",
};

function App() {
  const [themeMode, setThemeMode] = useState(false);

  function themeChange() {
    setThemeMode(!themeMode);
  }

  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <div className={`page-wrap ${themeMode == true ? "light" : "dark"}`}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navigation />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home themeChange={themeChange} />}
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

function Navigation() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}

export default App;

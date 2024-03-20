import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";

const darkTheme = {
  white : "#fff",
  textColor: "#ddd",
  backgroundColor: "rgba(68, 68, 68, 0.6)",
  backgroundColorDepth2: "rgba(68, 68, 68, 0.8)",
  linearGradientColor:
    "linear-gradient(131deg,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)",
  borderColor: "1px solid rgba(255, 255, 255, 0.1)",
};
const lightTheme = {
  white: "#fff",
  textColor: "#444",
  backgroundColor: "rgba(255,255,255, 0.6)",
  backgroundColorDepth2: "rgba(255, 255, 255, 0.8)",
  linearGradientColor:
    "#121212",
  borderColor: "1px solid rgba(68, 68, 68, 0.18)",
};

function App() {
  // theme 데이터 상태관리
  const [themeMode, setThemeMode] = useState(true);
  const [floatData, setFloatData] = useState({
    viewData: "",
    state: false,
    windowCalcData : ""
  });
  const [testData, setTestData] = useState({
    viewData : "",
    state: false,
    windowCalcData: "",
    id : "",
  });

  function themeChange() {
    setThemeMode(!themeMode);
  }
  
  function floatOpPress({data : data}, e) {
    
    
    if (data == "close") {
      setFloatData({
        viewData: data,
        state: false,
        windowCalcData : floatData.windowCalcData
      })
    } else {

      const windowData = {
        x: e.clientX,
        y: e.clientY,
        getX: e.currentTarget.getBoundingClientRect().left,
        getY: e.currentTarget.getBoundingClientRect().top
      }
      setFloatData({
        viewData: data,
        state: true,
        windowCalcData: windowData
        
      })
    }
  }
  function panelFunction ({ data: data}, e){
    
    if (data == "close") { 
      setTestData({
        viewData : data,
        state: false,
        windowCalcData: "",
        id: ""
      })
    } else {
      const windowData = {
        getX: e.currentTarget.getBoundingClientRect().left,
        getY: e.currentTarget.getBoundingClientRect().top
      }
      setTestData({
        viewData: data,
        state: true,
        windowCalcData: windowData,
        id: e.currentTarget.id
      })


    }
    
  }

  const globalActions = { themeChange, floatOpPress, panelFunction };

  


  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <div className={`page-wrap ${themeMode == true ? "light" : "dark"}`}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Navigation />
          <Routes>
            <Route
              exact
              path="/"
              element={<Home floatData={floatData}
              themeChange={globalActions.themeChange}
              floating={globalActions.floatOpPress}
              testAction={globalActions.panelFunction}
              testState={testData}
              />}
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

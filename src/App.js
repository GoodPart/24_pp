import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import { ThemeProvider } from "styled-components";

/* 분리 예정 */
const darkTheme = {
  white: "#fff",
  white_2 : "#eee",
  point: "#eeaeca",
  textColor: "#eee",
  backgroundColor100 :"rgba(68, 68, 68, 1)", 
  backgroundColor: "rgba(68, 68, 68, 0.6)",
  backgroundColorDepth2: "rgba(68, 68, 68, 0.8)",
  linearGradientColor:
    "linear-gradient(131deg,rgba(238, 174, 202, 1) 0%,rgba(148, 187, 233, 1) 100%)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  boxShadow: " 4px 4px 6px 0 rgba(255, 255, 255, 0.26), 1px 1px 4px 0 rgba(255, 255, 255, 0.26)",
  invert: "invert()",
};
const lightTheme = {
  white: "#fff",
  white_2: "#eee",
  point: "#94bbe9",
  textColor: "#333",
  backgroundColor100 :"rgba(255, 255, 255, 1)", 
  backgroundColor: "rgba(255,255,255, 0.6)",
  backgroundColorDepth2: "rgba(255, 255, 255, 0.8)",
  linearGradientColor:
    "#121212",
  borderColor: "rgba(68, 68, 68, 0.18)",
  boxShadow: " 4px 4px 6px 0 rgba(0, 0, 0, 0.26), 1px 1px 4px 0 rgba(0, 0, 0, 0.26);",
  invert: "",
};
/* 분리 예정 */


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
    
    
    if (data === "close") {
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
    
    if (data === "close") { 
      setTestData({
        viewData : data,
        state: false,
        windowCalcData: "",
        id: ""
      })
      document.body.removeAttribute("style");
    } else {
     
      //window.scrollY - getY 만큼 스크롤 이동
      let currentScrollY = window.scrollY;
      let topPositionCheck = e.currentTarget.getBoundingClientRect().top < 0;
      // console.log(e.currentTarget.getBoundingClientRect())
      // console.log(window.scrollY)

      if (topPositionCheck) {
        window.scrollTo({
          top: currentScrollY + (e.currentTarget.getBoundingClientRect().top * 2),
          behavior: "smooth"
        })
      }
      const windowData = {
        getX: e.currentTarget.getBoundingClientRect().left,
        getY: Math.abs(e.currentTarget.getBoundingClientRect().top)
      }
      setTestData({
        viewData: data,
        state: true,
        windowCalcData: windowData,
        id: e.currentTarget.id
      })
        document.body.style.overflow = "hidden";



    }
    
  }

  const globalActions = { themeChange, floatOpPress, panelFunction };

  


  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      <div className={`wrapper ${themeMode === true ? "light" : "dark"}`}>
        <div className={`page-wrap`}>
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

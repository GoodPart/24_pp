import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./login";
import { ThemeProvider } from "styled-components";
import { Navigation } from "./components/navigator";
import { Cookies, CookiesProvider, useCookies } from "react-cookie";

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
  boxShadow: " 4px 4px 6px 0 rgba(0, 0, 0, 0.26), 1px 1px 4px 0 rgba(0, 0, 0, 0.26)",
  loadingtheme: "linear-gradient(120deg, #232323 30%, rgba(68, 68, 68, 0.6) 38%, rgba(68, 68, 68, 0.6) 40%, #232323 48%)",
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
    "#0F172A",
  borderColor: "rgba(68, 68, 68, 0.18)",
  boxShadow: " 4px 4px 6px 0 rgba(0, 0, 0, 0.26), 1px 1px 4px 0 rgba(0, 0, 0, 0.26);",
  loadingtheme: "linear-gradient(120deg, #eaeaea 30%, rgba(244, 244, 244, 0.6) 38%, rgba(244, 244, 244, 0.6) 40%, #eaeaea 48%)",
  invert: "",
};
/* 분리 예정 */


function App() {
  const cookies = new Cookies();
  
  const [cookie1, setCookie1, removeCookie1] = useCookies(['auth']);
  const setCookie = (name, value, options) => {
    setCookie1(name, value, {
      path: "/",
      source: "/",
      // expires: new Date(Date.now() + 5 * 1000),
    })
  }

  const getCookie = (name) => {
    return cookies.get(name);
  }
  const popCookie = (name) => {
    removeCookie1("auth")
  }

  const loginAction = (name, value) => {
    setCookie(name, value);
    
    // console.log(result);
  }

  useEffect(() => {
    console.log(Object.keys(cookie1).length == 0)
  }, [])


  const cookieToolkit = { setCookie, getCookie, popCookie }


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
    <CookiesProvider>
      <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
        <div className={`wrapper ${themeMode === true ? "light" : "dark"}`}>
          <div className={`page-wrap`}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Navigation themeChange={globalActions.themeChange} themeMode={themeMode} isAuth={getCookie("userId")} cookieTool={cookieToolkit}  />
              <Routes>
                <Route
                  exact
                  path="/"
                  element={

                    <Home floatData={floatData}
                      themeChange={globalActions.themeChange}
                      floating={globalActions.floatOpPress}
                      testAction={globalActions.panelFunction}
                        testState={testData}
                        cookieTool={cookieToolkit}
                      />
                  }
                />
                <Route path={`/login`} element={<Login cookieTool={cookieToolkit} loginAction={loginAction} />}  />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </ThemeProvider>
    </CookiesProvider>
  );
}



export default App;

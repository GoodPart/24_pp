import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

import "../src/assets/style/common.scss";

const darkTheme = {
  textColor: "whitesmoke",
  backgroundColor: "#111",
};
const lightTheme = {
  textColor: "#111",
  backgroundColor: "whitesmoke",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

reportWebVitals();

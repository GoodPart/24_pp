import React, { useState, useEffect } from "react";
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx } from "./components/panel";
import Buttons from "./components/widget/w_buttons";
import WidgetProfile from "./components/widget/w_profil";
import ThemeWidget from "./components/widget/w_theme";
import styled from "styled-components";
import Today from "./components/widget/w_today";

function Home({ themeChange }) {
  let [theme, setTheme] = useState(false);

  return (
    <div className="main">
      <div className="skill-wrap">
        <PanelWrapper>
          <PanelFlexInnerWrap direction={"row"}>
            <PanelFlx
              flex={"inherit"}
              width={400}
              height={320}
              padding={24}
              theme={theme}
              children={<WidgetProfile />}
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap direction={"column"}>
            <PanelFlx
              padding={24}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <ThemeWidget />
              <Buttons title={"테마"} onclick={themeChange} />
            </PanelFlx>
            <PanelFlx
              padding={24}
              children={<Today />}
              flexDirection={"column"}
              justify="center"
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap direction={"column"} expanded={true}>
            <PanelFlx padding={24} />
          </PanelFlexInnerWrap>
          {/* <PanelFlexInnerWrap direction={"column"} expanded={true}>
            <PanelFlx padding={24} />
            <PanelFlx padding={24} />
          </PanelFlexInnerWrap> */}
        </PanelWrapper>
      </div>
    </div>
  );
}

export default Home;
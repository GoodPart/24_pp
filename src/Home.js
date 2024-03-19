import React, { useState, useEffect } from "react";
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx, PanelChildPanelWrap } from "./components/panel";
import Popup from "./components/widget/w_popup";
import Buttons from "./components/widget/w_buttons";
import WidgetProfile from "./components/widget/w_profil";
import ThemeWidget from "./components/widget/w_theme";
import styled from "styled-components";
import Today from "./components/widget/w_today";
import FloatWrap from "./components/widget/w_float";
import { html } from "./components/widget/skills/html";
import { css } from "./components/widget/skills/css";
import { js } from "./components/widget/skills/js";
import { nodejs } from "./components/widget/skills/node";
import { react } from "./components/widget/skills/react";
import { redux } from "./components/widget/skills/redux";
import { mongodb } from "./components/widget/skills/mongodb";
import { firebase } from "./components/widget/skills/firebase";
import { flutter } from "./components/widget/skills/flutter";
import { gulp } from './components/widget/skills/glup';





function Home({ floatData,themeChange, floating }) {
  let [theme, setTheme] = useState(false);


  return (
    <div className="main">
      <div className="skill-wrap">
        <PanelWrapper>
          <PanelFlexInnerWrap direction={"row"}>
            <PanelFlx
              flex={"inherit"}
              width={400}
              height={310}
              padding={24}
              theme={theme}
              children={<WidgetProfile />}
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap direction={"column"}>
            <PanelFlx
              padding={24}
              flex={0}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <ThemeWidget />
              <Buttons title={"테마"} onclick={themeChange} />
            </PanelFlx>
            <PanelFlx
              padding={24}
              flex={0}
              children={<Today />}
              flexDirection={"column"}
              justify="center"
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap direction={"column"} expanded={true}>
            <PanelFlx padding={24}>
              <PanelFlexInnerWrap direction={"row"} flexWrap={true} expanded={true} gap={10}>
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={html} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={css} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={js} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={nodejs} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={gulp} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={react} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={redux} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={mongodb} />} />
                <PanelFlx padding={12} flex={0} children={<FloatWrap onclick={floating} state={false} data={firebase} />} />

            
        

              </PanelFlexInnerWrap>
              
            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
        
        <PanelWrapper>
          <PanelFlexInnerWrap direction={"column"} expanded={true}>
            <PanelFlx padding={24}>
              <PanelFlx />
            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
      </div>
      <Popup floatData={floatData} onclick={floating} children={<div>{floatData.viewData.title}<br /> {floatData.viewData.desc}</div>} />
    </div>
  );
}

export default Home;

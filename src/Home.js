import React, { useState } from "react";
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx, ExpandedPanel, DetailPanel } from "./components/panel";
import Buttons from "./components/widget/w_buttons";
import WidgetProfile, { Heading01 } from "./components/widget/w_profil";
import ThemeWidget from "./components/widget/w_theme";
import Today from "./components/widget/w_today";
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
import { Pages } from "./components/widget/skills/w_route";

// 임시
import { careerData } from './components/jsons/career';
import { Career } from "./components/widget/career/w_career";

import { referenceData } from "./components/jsons/reference";






function Home({ themeChange,testAction, testState }) {
  const [theme, setTheme] = useState(false);
  const [detailView, setDetailView] = useState({
    state: false,
    target : ""
  });

  function toggleDetailView({action, target}) {
    if (action == "close") {
      setDetailView({
        state: false,
        target : ""
      })
    } else {
      setDetailView({
        state: !detailView.state,
        target : target
      })
    }
  }


  
  return (
    <div className="main">
      <div className="skill-wrap">
        <PanelWrapper>
          <PanelFlexInnerWrap $direction={"row"} className={"profile"}>
            <PanelFlx
              flex={"inherit"}
              width={400}
              height={310}
              padding={24}
              theme={theme}
              children={<WidgetProfile />}
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap $direction={"column"} className={"widgets"}>
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
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"skills"}>
            <PanelFlx padding={24}>
              <PanelFlexInnerWrap $direction={"row"} $flexWrap={true} $expanded={true} $gap={10}>
                <ExpandedPanel id="a1"><Pages id="a1" testState={testState} onclick={testAction} children={html} /></ExpandedPanel>
                <ExpandedPanel id="a2"><Pages id="a2" testState={testState} onclick={testAction} children={css} /></ExpandedPanel>
                <ExpandedPanel id="a3"><Pages id="a3" testState={testState} onclick={testAction} children={js} /></ExpandedPanel>
                <ExpandedPanel id="a4"><Pages id="a4" testState={testState} onclick={testAction} children={nodejs} /></ExpandedPanel>
                <ExpandedPanel id="a5"><Pages id="a5" testState={testState} onclick={testAction} children={gulp} /></ExpandedPanel>
                <ExpandedPanel id="a6"><Pages id="a6" testState={testState} onclick={testAction} children={react} /></ExpandedPanel>
                <ExpandedPanel id="a7"><Pages id="a7" testState={testState} onclick={testAction} children={redux} /></ExpandedPanel>
                <ExpandedPanel id="a8"><Pages id="a8" testState={testState} onclick={testAction} children={mongodb} /></ExpandedPanel>
                <ExpandedPanel id="a9"><Pages id="a9" testState={testState} onclick={testAction} children={firebase} /></ExpandedPanel>
                <ExpandedPanel id="a10"><Pages id="a10" testState={testState} onclick={testAction} children={flutter} /></ExpandedPanel>
                

            
        

              </PanelFlexInnerWrap>
              
            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
        
        <PanelWrapper>
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"career"}>
            <PanelFlx padding={24} overflow={true}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={12}>
                <Heading01 className="">CAREER</Heading01>
                {
                  Object.values(careerData).map((ele, index) => (<PanelFlx key={index} padding={12}>{<Career data={ele} onclick={toggleDetailView} />}</PanelFlx>))
                }
                <DetailPanel className="next-view" data={detailView} onclick={toggleDetailView}>
                </DetailPanel>

              </PanelFlexInnerWrap>
            </PanelFlx>
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"career"}>
            <PanelFlx padding={24}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={12}>
                <Heading01 className="">REFERENCE</Heading01>
                {
                  Object.values(referenceData).map((ele, index) => (<>{ ele.title}</>))
                }
              </PanelFlexInnerWrap>
            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
      </div>
    </div>
  );
}



export default Home;

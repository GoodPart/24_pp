import React, { useState, useEffect } from "react";
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx, ExpandedPanel, DetailPanel } from "./components/panel";
import Buttons from "./components/widget/w_buttons";
import WidgetProfile, { Heading01, WidgetProfileDesc } from "./components/widget/w_profil";
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
import { privateData, myData } from "./components/jsons/private";
import { Label, LabelItemInlineDesc } from "./components/widget/w_label";

import { Etc } from "./components/widget/etc/w_etc";

import Contact from "./components/widget/contact/contact"
import { OsAlert } from "./components/widget/systemalert/w_alert";

import { Calendar } from "./components/widget/calendar/w_calendar";

import axios from "axios";
import { SwiperWrap } from "./components/widget/w_swiper";






function Home({ themeChange, testAction, testState, cookieTool }) {
  const [theme, setTheme] = useState(false);
  const [news, setNews] = useState('');
  const [detailView, setDetailView] = useState({
    state: false,
    target : ""
  });
  const [isAuth, setIsAuth] = useState({
    state: false,
    userId : "User"
  });

  const [alert, setAlert] = useState({
    state: true, // 임시 false
    time : 0,
  })

  useEffect(() => {
    cookieTool.getCookie("userId") != undefined ? setIsAuth({
      state: true,
      userId: cookieTool.getCookie("userId")
    }) : setIsAuth({
      state: false,
      value : ""
    })

    const fetchNews = async () => {
      await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_KEY}`).then((res) => {
        setNews(res.data.articles)
      }).catch(err => {
        console.log(err)
      })
    }
    fetchNews()


  }, [])

  function alerting({action}) {
    if (action === "latter") {
      setAlert({
        state: false,
        time: 5000
      });
      timer();
      
    } else {
      setAlert({
        state: false,
        time: 0
      });
    }
  }

  const timer = () => {
    setTimeout(() => {
      setAlert({
        state : true
      })
    }, 5000)
  }

  function toggleDetailView({action, target}) {
    if (action == "close") {
      setDetailView({
        state: false,
        target : target
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
      <OsAlert onclick={alerting} state={alert} isAuth={isAuth} />
      <div className="">
        <PanelWrapper>
          <PanelFlexInnerWrap $direction={"column"} className={"profile"}>
            <PanelFlexInnerWrap className={"app_use_info"}>
              <PanelFlx
                padding={12}
                flex={'auto'}
                width={400}
                height={70}
                minHeight={'auto'}
                flexDirection={"column"}
                minWidth
              >
                <Calendar type="viewer" />
              </PanelFlx>

            </PanelFlexInnerWrap>
            <PanelFlx
              flex={'inherit'}
              width={400}
              height={310}
              padding={24}
              theme={theme}
              children={<WidgetProfile />}
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap $direction={"row"} className={"profile"} $expanded={true}>
            <PanelFlx
              flex={'auto'}
              height={'auto'}
              padding={24}
              theme={theme}
              children={<WidgetProfileDesc />}
            />
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap $direction={"row"} className={"widgets"}>
            {/* <PanelFlx
              padding={24.5}
              flex={0}
              flexDirection={"column"}
              justify={"space-between"}
            >
              <ThemeWidget />
              <Buttons title={"테마"} onclick={themeChange} />
            </PanelFlx>
            <PanelFlx
              padding={24.5}
              flex={0}
              children={<Today />}
              flexDirection={"column"}
              justify="center"
            /> */}
            <PanelFlx
              width={500}
              height={392}
              padding={24}
            >
              {
                news ? <SwiperWrap data={news} /> : "loading..."
              }
            </PanelFlx>
          </PanelFlexInnerWrap>
         
          
        
          
        </PanelWrapper>
        
        <PanelWrapper className="app_area">
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"skills"}>
            <PanelFlx padding={24} minHeight={'auto'}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={10}>
                <Heading01 className="">skill</Heading01>
                <div style={{display : "flex", gap : 10}}>
                  <ExpandedPanel id="a1">
                    <Pages id="a1" testState={testState} onclick={testAction} children={html} />
                  </ExpandedPanel>
                  <ExpandedPanel id="a2"><Pages id="a2" testState={testState} onclick={testAction} children={css} /></ExpandedPanel>
                  <ExpandedPanel id="a3"><Pages id="a3" testState={testState} onclick={testAction} children={js} /></ExpandedPanel>
                  <ExpandedPanel id="a4"><Pages id="a4" testState={testState} onclick={testAction} children={nodejs} /></ExpandedPanel>
                  <ExpandedPanel id="a5"><Pages id="a5" testState={testState} onclick={testAction} children={gulp} /></ExpandedPanel>
                  <ExpandedPanel id="a6"><Pages id="a6" testState={testState} onclick={testAction} children={react} /></ExpandedPanel>
                  <ExpandedPanel id="a7"><Pages id="a7" testState={testState} onclick={testAction} children={redux} /></ExpandedPanel>
                  <ExpandedPanel id="a8"><Pages id="a8" testState={testState} onclick={testAction} children={mongodb} /></ExpandedPanel>
                  <ExpandedPanel id="a9"><Pages id="a9" testState={testState} onclick={testAction} children={firebase} /></ExpandedPanel>
                  <ExpandedPanel id="a10"><Pages id="a10" testState={testState} onclick={testAction} children={flutter} /></ExpandedPanel>
                </div>

              </PanelFlexInnerWrap>

            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>

        <PanelWrapper className="deep2">
          <PanelFlexInnerWrap $direction={"column"}   $expanded={true}  className={"career"}>
            <PanelFlx padding={24} overflow={true} >
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={8}>
                <Heading01 className="">CAREER</Heading01>
                {
                  Object.values(careerData).map((ele, index) => (<PanelFlx key={index} flex={0} minHeight={'auto'} height={'auto'} padding={16} >{<Career data={ele} onclick={toggleDetailView} />}</PanelFlx>))
                }
                <DetailPanel className="next-view" data={detailView} onclick={toggleDetailView}>
                </DetailPanel>

              </PanelFlexInnerWrap>
            </PanelFlx>
          </PanelFlexInnerWrap>
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"reference"}>
            <PanelFlx padding={24} height={'auto'} flex={'none'}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={12}>
                <Heading01 className="">REFERENCE</Heading01>
                {
                  Object.values(referenceData).map((ele, index) => (<PanelFlx key={index} minHeight={'auto'}>
                    <Label _path_="logos" imgName={ele.title} labelName={ele.title} size={12} /><LabelItemInlineDesc><a href={ele.path} target="_blank">{ele.path}</a></LabelItemInlineDesc>
                  </PanelFlx>))
                }
              </PanelFlexInnerWrap>
            </PanelFlx>
            <PanelFlx padding={24} flex={1}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={12}>
                <Heading01 className="">etc</Heading01>
                <Etc data={privateData} />
              </PanelFlexInnerWrap>
            </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
        <PanelWrapper>
         
          <PanelFlexInnerWrap $direction={"row"} className={"contact"} $expanded={true}>
            <PanelFlx
              flex={1}
              height={310}
              padding={24}
              theme={theme}
            >
              <PanelFlexInnerWrap $direction={"column"}  $expanded={true} $gap={12}>
                <Heading01 className="">contact me</Heading01>
                <Contact />

              </PanelFlexInnerWrap>
              </PanelFlx>
          </PanelFlexInnerWrap>
        </PanelWrapper>
      </div>
    </div>
  );
}



export default Home;

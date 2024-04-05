import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx, ExpandedPanel, DetailPanel } from "./components/panel";
import Buttons from "./components/widget/w_buttons";
import WidgetProfile, { Heading01, WidgetProfileDesc } from "./components/widget/w_profil";
import ThemeWidget from "./components/widget/w_theme";
import Today from "./components/widget/w_today";
import { personal } from "./components/widget/skills/personal";
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
import { SwiperWrap, SwiperWrapLoading } from "./components/widget/w_swiper";
import { NewsCategory } from "./components/widget/news/news";






function Home({ themeChange, testAction, testState, cookieTool }) {
  const [theme, setTheme] = useState(false);
  const newsCategory = [
    {
      category: "entertainment",
      name: "문화",
      icon : "faShuffle"
    },{
      category: "business",
      name: "비즈니스",
      icon: "faNewspaper"
    },{
      category: "health",
      name: "건강",
      icon: "faHandHoldingHeart"

    },{
      category: "science",
      name: "과학",
      icon: "faBrain"
    },{
      category: "sports",
      name: "스포츠",
      icon: "faPersonWalking"
    },{
      category: "technology",
      name: "기술",
      icon: "faRocket"
    },
  ]
  const [news, setNews] = useState({
    category: "entertainment",
    name: "문화",
    data: "",
  });
  const [loading, setLoading] = useState(false);
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


  const fetchNews = async (category) => {
    console.log('getdata ->', category)

    const get = newsCategory.filter(item => item.category === category && item.name);
    setLoading(true)
    const getNewsData = [
        {
          source: {
            id: null,
            name : "test"
          },
          author: "Michael Kern",
          title: "Cesium Wars: China and America Battle for the Future of Big Tech",
          url: "https://oilprice.com/Energy/Energy-General/Cesium-Wars-China-and-America-Battle-for-the-Future-of-Big-Tech.html",
          urlToImage: "https://d32r1sh890xpii.cloudfront.net/article/718x300/2024-04-02_lcjx06xp1q.jpg",
          publishedAt: "2024-04-03T00:00:00Z",
          content: "Despite the repeated Russian strikes…\r\nThe total number of active…\r\nNatPower U.K.'s massive investment in…\r\nBy Michael Kern - Apr 02, 2024, 7:00 PM CDTThe key to long-term North American security has… [+30993 chars]"
        },
        {
          source: {
            id: null,
            name: "test2"
          },
          author: "Investing.com",
          title: "US stock futures muted as Wall St nurses dismal start to Q2",
          url: "https://www.investing.com/news/stock-market-news/us-stock-futures-muted-as-wall-st-nurses-dismal-start-to-q2-3362853",
          urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEA6M0LI_L.jpg",
          publishedAt: "2024-04-02T23:55:27Z",
          content: "Despite the repeated Russian strikes…\r\nThe total number of active…\r\nNatPower U.K.'s massive investment in…\r\nBy Michael Kern - Apr 02, 2024, 7:00 PM CDTThe key to long-term North American security has… [+30993 chars]"
      },
      {
        source: {
          id: null,
          name: "test2"
        },
        author: "Investing.com",
        title: "US stock futures muted as Wall St nurses dismal start to Q2 333333333333",
        url: "https://www.investing.com/news/stock-market-news/us-stock-futures-muted-as-wall-st-nurses-dismal-start-to-q2-3362853",
        urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEA6M0LI_L.jpg",
        publishedAt: "2024-04-02T23:55:27Z",
        content: "Despite the repeated Russian strikes…\r\nThe total number of active…\r\nNatPower U.K.'s massive investment in…\r\nBy Michael Kern - Apr 02, 2024, 7:00 PM CDTThe key to long-term North American security has… [+30993 chars]"
      },
      {
        source: {
          id: null,
          name: "test2"
        },
        author: "Investing.com",
        title: "US stock futures muted as Wall St nurses dismal start to Q2 44444444444",
        url: "https://www.investing.com/news/stock-market-news/us-stock-futures-muted-as-wall-st-nurses-dismal-start-to-q2-3362853",
        urlToImage: "https://i-invdn-com.investing.com/news/LYNXMPEA6M0LI_L.jpg",
        publishedAt: "2024-04-02T23:55:27Z",
        content: "Despite the repeated Russian strikes…\r\nThe total number of active…\r\nNatPower U.K.'s massive investment in…\r\nBy Michael Kern - Apr 02, 2024, 7:00 PM CDTThe key to long-term North American security has… [+30993 chars]"
      },
    ]
    
    if (cookieTool.getCookie(`news_${category}`)) {

      //cookie call
      setNews({
        data: cookieTool.getCookie(`news_${category}`),
        name: get[0].name,
        category : category
      })

    } else {
      console.log("쿠키 없음")
      
      // setLoading(true)

      // await axios.get(`https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_KEY}`).then((res) => {

        
      //   setNews({
      //     data: res.data.articles,
      //     name: get[0].name,
      //     category: category
      //   })


      //   // cookieTool.setCookie(`news_${category}`, res.data.articles, 36000) //10 = 10초

      // }).catch(err => {
      //   console.log(err)
      //   if (err.response.status === 429) {
      //     setNews({
      //       ...news,
      //       name : "요청이 너무 많습니다",
      //       loading: false,
      //     })
      //   } 

      // })

    cookieTool.setCookie(`news_${category}`, getNewsData, 10) //10 = 10초
    setNews({
      data: cookieTool.getCookie(`news_${category}`),
      name: get[0].name,
      category: category
    })
    
    
      
      
      
      
      


    }
    setLoading(false)
  }

  const navigate = useNavigate();
  useEffect(() => {
    
    console.log('-->',cookieTool.getCookie("userId") === undefined)
    if (cookieTool.getCookie("userId") === undefined) {
      navigate("/login");
      setIsAuth({
        state: false,
        value: ""
      })
      
    } else {
      setIsAuth({
        state: true,
        userId: cookieTool.getCookie("userId")
      })
      
    }
    
    fetchNews(news.category)


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
              flex={'auto'}
              width={'auto'}
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
          
         
          
        
          
        </PanelWrapper>
        <PanelWrapper>
          <PanelFlexInnerWrap $direction={"row"} className={"news"} $width={'100%'}>
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
              flex={'auto'}
              height={400}
              padding={24}
            >
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={false} $expanded={true} $gap={8} $width={'100%'}>
                <Heading01 className="">today - { news.name}</Heading01>

                {
                  news.data && !loading ? <SwiperWrap data={news.data} loading={!loading} /> : <SwiperWrapLoading loading={loading} />
                }
              </PanelFlexInnerWrap>

            </PanelFlx>
            <PanelFlexInnerWrap $direction={'row'} $flexWrap={true} $width={'230px'} $gap={12} className="category">
              <NewsCategory newsData={newsCategory} onclick={fetchNews} />

            </PanelFlexInnerWrap>

          </PanelFlexInnerWrap>
        </PanelWrapper>
        
        <PanelWrapper className="app_area">
          <PanelFlexInnerWrap $direction={"column"} $expanded={true} className={"skills"}>
            <PanelFlx padding={24} minHeight={'auto'}>
              <PanelFlexInnerWrap $direction={"column"} $flexWrap={true} $expanded={true} $gap={10}>
                <Heading01 className="">skill</Heading01>
                <div style={{ display: "flex", gap: 10 }}>
                  <ExpandedPanel id="a0">
                    <Pages id="a0" testState={testState} onclick={testAction} children={personal} />
                  </ExpandedPanel>
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

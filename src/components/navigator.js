import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { PanelWrapper, PanelFlexInnerWrap, PanelFlx, ExpandedPanel, DetailPanel } from "./panel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons';

import { Toggle } from './widget/w_toggle';


export function Navigation({ themeChange, themeMode, isAuth, cookieTool }) {
    const today = new Date().getFullYear();
    const getMonth =
        new Date().getMonth() + 1 < 10
            ? `0${new Date().getMonth() + 1}`
            : new Date().getMonth() + 1;
    const getDate = new Date().getDate();
    const getHour = new Date().getHours();
    const getMin =
        new Date().getMinutes() < 10
            ? `0${new Date().getMinutes()}`
            : new Date().getMinutes();
    const getSec =
        new Date().getSeconds() < 10
            ? `0${new Date().getSeconds()}`
            : new Date().getSeconds();

    const [timer, setTimer] = useState("00:00:00");
    const [menuToggle, setMenuToggle] = useState(false);

    const currentTimer = () => {
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        setTimer(`${hours}:${minutes}:${seconds}`);
    };

    const startTimer = () => {
        setInterval(currentTimer, 1000);
    };

    startTimer();

    useEffect(() => {
    }, [])
    return (
        <PanelWrapper className='navigator'>
            <PanelFlexInnerWrap $direction={"row"} $expanded={true}>
                <PanelFlx
                    flex={1}
                    height={'auto'}
                    padding={12}
                    minHeight={'auto'}
                >   
                    <Wrapper>
                        
                        <div className='navis'>
                            <div>
                                <FontAwesomeIcon icon={faAppleAlt} /> <span>Welcom</span>
                            </div>
                            <ul className={menuToggle ? "show" : ""}>
                                <li>
                                    {
                                        isAuth != undefined ? <Link to={ "/"} onClick={()=> setMenuToggle(false)}>Home</Link>  :<span>Home</span>
                                    }
                                </li>
                                <li>
                                    {
                                        <Link to="/login" onClick={() => setMenuToggle(false)}>Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className='functions'>
                            {/* <div>베터리</div> */}
                            <div className='theme'><Toggle onclick={themeChange} state={themeMode} /> <span>{themeMode ? "Default" : "Dark"}</span></div>
                            <div className='clock'>{getMonth}월 {getDate}일 {getHour}:{getMin}</div>
                            <div className='hamberger' onClick={()=>setMenuToggle(!menuToggle) }></div>
                        </div>
                    </Wrapper>
                </PanelFlx>
            </PanelFlexInnerWrap>
        </PanelWrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width : 100%;

    .navis {
        display: flex;
        gap: 24px;

        div {
            color: ${props => props.theme.textColor};

            span {
                margin-left: 12px;
                font-weight: bold;
            }
        }
    }
    .navis ul {
        display: flex;
        gap: 12px;

        li span {
            display: flex;
            padding: 12px;
            color: ${props => props.theme.textColor};
            opacity : 0.4

        }

        li a{
            color: ${props => props.theme.textColor};
        }
    }
    .functions {
        display: flex;
        gap: 12px;
        color: ${props => props.theme.textColor};

        .theme {
            display : flex;
            gap: 4px;
            align-items: center;
            
        }

    }
    .clock {
        display: flex;
        align-items: center;
    }
    .hamberger {
        display: none;
        position: relative;
        width : 30px;
        height: 30px;

        &:after {
            content: '';
            position: absolute;
            top: 6px;
            left : 0;
            width : 100%;
            height: 3px;
            background: ${props => props.theme.linearGradientColor};

        }
        &:before {
            content: '';
            position: absolute;
            bottom: 6px;
            left : 0;
            width : 100%;
            height: 3px;
            background: ${props => props.theme.linearGradientColor};


        }
    }

    @media (max-width: 767px) {
        .navis {
            align-items: center;

            svg {
                height :1.2em;
            }
            svg + span{
                margin-left: 0px;
            }
        }
        .theme span {
            font-weight: 700;
        }
        .clock {
            display: none;
            font-weight: 700;
        }
        .navis ul {
            display: none;
            position: absolute;
            top: 54px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 0;
            flex-direction: column;
            width: 100%;
            background-color: ${props => props.theme.backgroundColorDepth2};

            &.show {
                display: block;
            }

            li a {
                display: flex;
                padding: 12px
                
            }
        }
    }
`

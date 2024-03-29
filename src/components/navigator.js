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
        // cookieTool.getCookie("userId")
    }, [])
    return (
        <PanelWrapper className='navigator'>
            <PanelFlexInnerWrap $direction={"row"} className={"navigator"} $expanded={true}>
                <PanelFlx
                    flex={1}
                    height={'auto'}
                    padding={12}
                    minHeight={'auto'}
                >   
                    <Wrapper>
                        
                        <div className='navis'>
                            <div>
                                <FontAwesomeIcon icon={faAppleAlt} /> <span>Main</span>
                            </div>
                            <ul>
                                <li>
                                    {
                                        isAuth != undefined ? <Link to={ "/"}>Home</Link>  : "Home"
                                    }
                                </li>
                                <li>
                                    {
                                    <Link to="/login">Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className='functions'>
                            <div>베터리</div>
                            <div className='theme'><Toggle onclick={themeChange} state={themeMode} /> <span>{themeMode ? "Light" : "Dark"}</span></div>
                            <div>{getMonth}월 {getDate}일 {getHour}:{getMin}</div>
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
`
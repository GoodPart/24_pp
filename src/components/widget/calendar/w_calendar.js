import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

export const Calendar = ({type }) => {
    let todayY = new Date().getFullYear();
    let todayM = new Date().getMonth();

    let monthCount = useRef(0);

    let [stdDate, setStdDate] = useState({
        y: todayY,
        m: todayM + 1,
    });

    const inCrease = () => {

        monthCount.current = monthCount.current + 1

        let result = new Date(new Date().setMonth(new Date().getMonth() + monthCount.current));
        const y = result.getFullYear();
        const m = result.getMonth() + 1;
        setStdDate({
            y: y,
            m: m
        })
    }

    const deCrease = () => {
        monthCount.current = monthCount.current - 1

        let result = new Date(new Date().setMonth(new Date().getMonth() + monthCount.current));
        const y = result.getFullYear();
        const m = result.getMonth() + 1;
        setStdDate({
            y: y,
            m: m
        })
    }

    const todaySet = () => {
        let result = new Date(new Date().setMonth(new Date().getMonth()));
        const y = result.getFullYear();
        const m = result.getMonth() + 1;
        setStdDate({
            y: y,
            m: m
        })
        monthCount.current = 0
    }

    useEffect(() => {
    }, [])

    return (
        <CalendarItem dateProps={stdDate} type={type} />
    )
}

export const CalendarItem = ({ dateProps, type }) => {
    let dateY = dateProps.y;
    let dateM = dateProps.m;


    const now = new Date();


    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth() + 1;
    const nowDate = now.getDate();

    let sel_day = 4;
    const getBeforeDay = (sel) => new Date().setDate(new Date().getDate() + sel);

    let dayArray = [];

    for (let i = 1; i < (sel_day * 2) ; i++) {
        if (i <= sel_day) {
            dayArray.push(getBeforeDay(i - sel_day))
        } else {
            dayArray.push(getBeforeDay(Math.abs(i - sel_day)))
        }
    }

    

    const firstDate = new Date(dateY, dateM, 1).getDate();
    const lastDate = new Date(dateY, dateM, 0).getDate();

    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    const getDayFunc = (day) => {
        return `${WEEKDAY[day]}`
    }
    let form = {
        first_date: firstDate,
        now_year: nowYear,
        now_month: nowMonth,
        now_date: nowDate,
        last_date: lastDate,
        dateY: dateY,
        dateM: dateM
    }
    return (
        <Element calendarProps={form} get5={dayArray} getDayFunc={getDayFunc} type={type} />
    )
} 

export const Element = ({ calendarProps, get5, getDayFunc, type }) => {
    const mapLength = calendarProps.last_date;

    const localMonth = calendarProps.dateM;

    const nowYear = calendarProps.dateY
    const nowDate = calendarProps.now_date;
    const nowMonth = calendarProps.now_month;
    const getMapArray = Array.from({ length: mapLength }, (value, index) => index + 1);

    
    return (
        <Wrapper>
            {/* {nowYear}<br />
            {nowMonth}<br /> */}
            <ViewWrap $type={'viewer'}>
                <Select $data={3}></Select>
                {
                    get5.map((ele, index) => {
                        
                        return (
                            <div key={index} className='element' data-index={index+1}>
                                <div className={getDayFunc(new Date(ele).getDay()) == "일" || getDayFunc(new Date(ele).getDay()) == "토" ? "holly" : "" } >{getDayFunc(new Date(ele).getDay())}</div>
                                <div key={index}>{new Date(ele).getDate()}</div>
                            </div>
                        )
                    })
            }

            </ViewWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: inherit;
`

const ViewWrap = styled.div`
    position: relative;
    display: flex;
    flex-wrap: ${props => props.$type === "viewer" ? "wrap" : ""};
    flex-direction: ${props => props.$type === "viewer" ? "" : "column"};
    justify-content: center;
    height: inherit;


    .element {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width : calc(100% / 7);
        gap: 4px;
        color : ${props => props.theme.textColor};
        transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        border-radius: 8px;


        .holly {
            color: red;
        }

        div {
            font-weight: 700;
        }

        &:hover {
            background-color: rgba(0,0,0,0.1);
        }
    }
    
`

const Select = styled.div`
    position: absolute;
    z-index : -1;
    top: 0;
    left : 0;
    transform: ${props => `translateX(calc(${props.$data} * 100%))`};
    transition: transform .6s cubic-bezier(0.075, 0.82, 0.165, 1);
    width: calc(100% / 7);
    background: ${props => props.theme.backgroundColorDepth2};
    height: 100%;
    border-radius: 8px;

`
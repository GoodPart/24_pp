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
        <Element calendarProps={form} getDayFunc={getDayFunc} type={type} />
    )
} 

export const Element = ({calendarProps, getDayFunc, type }) => {
    const mapLength = calendarProps.last_date;

    const localMonth = calendarProps.dateM;

    const nowYear = calendarProps.dateY
    const nowDate = calendarProps.now_date;
    const nowMonth = calendarProps.now_month;
    const getMapArray = Array.from({ length: mapLength }, (value, index) => index + 1);

    return (
        <Wrapper>
            {nowYear}<br />
            {nowMonth}<br />
            <ViewWrap $type={type}>
            {
                getMapArray.map((ele, index) => {
                    return <div className='element'>
                        <div>{getDayFunc(new Date(calendarProps.dateY, calendarProps.dateM - 1, ele).getDay())}</div>
                        <div>{ele === nowDate ? `*${ele}` : ele}</div>
                    </div>
                })
            }

            </ViewWrap>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: inherit;
    overflow-y: auto;

`

const ViewWrap = styled.div`
    display: flex;
    flex-wrap: ${props => props.$type === "viewer" ? "wrap" : ""};
    flex-direction: ${props => props.$type === "viewer" ? "" : "column"};

    .element {
        width : calc(100% / 7);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Today() {
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

  return (
    <>
      <Heading01>{today}</Heading01>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignSelf: "center" }}>
            <Heading02>{getMonth}</Heading02>
            <Heading02>{getDate}</Heading02>
          </div>
          <div style={{ display: "flex" }}>
            <Heading02>{getHour}</Heading02>
            <Heading02>{getMin}</Heading02>
          </div>
        </div>
        <Heading01>{getSec}</Heading01>
      </div>
    </>
  );
}

const Heading01 = styled.div`
  align-self: center;
  font-size: 36px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const Heading02 = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;

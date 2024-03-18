import styled from "styled-components";

export default function Buttons({ title, onclick }) {
  return (
    <div>
      <Button onClick={onclick}>{title}</Button>
    </div>
  );
}

const Button = styled.button`
  position: relative;
  cursor: pointer;
  padding: 12px;
  margin: 0;
  width: 100%;
  color: #fff;
  border: none;
  border-radius: 10px;
  background: linear-gradient(
    131deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: inherit;
    height: 100%;
    transform: translate(-50%, -50%) scale(1);
    background: linear-gradient(
      131deg,
      rgba(238, 174, 202, 0.4) 0%,
      rgba(148, 187, 233, 0.4) 100%
    );
    filter: blur(2px);
    border-radius: inherit;
    transition: transform 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &:hover {
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: inherit;
      height: 100%;
      transform: translate(-50%, -50%) scale(1.2);
      background: linear-gradient(
        131deg,
        rgba(238, 174, 202, 0.4) 0%,
        rgba(148, 187, 233, 0.4) 100%
      );
    }
  }
`;

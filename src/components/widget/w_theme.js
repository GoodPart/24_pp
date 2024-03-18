import styled from "styled-components";

export default function ThemeWidget() {
  return <Icon />;
}

const Icon = styled.div`
  position: relative;
  margin: 0 auto;
  width: 50%;
  height: 50%;
  background: ${(props) => props.theme.linearGradientColor};
  transition: 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
  border-radius: 100%;

  /* &:after {
    opacity: ${(props) => (props.theme ? 1 : 0)};
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.backgroundColor};
    transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    border-radius: 100%;
  } */
`;

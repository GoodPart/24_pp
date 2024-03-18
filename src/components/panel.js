import styled from "styled-components";

export default function Panel({ width = 200, height = 200, children }) {
  return (
    <PanelWrap width={width} height={height}>
      {children}
    </PanelWrap>
  );
}

export function PanelFlx({
  flex = 1,
  width = 100,
  height = 100,
  padding = 12,
  flexDirection = "row",
  justify = "start",
  theme,
  children,
}) {
  return (
    <PanelFlxWrap
      className="show"
      flex={flex}
      width={width}
      height={height}
      padding={padding}
      flexDirection={flexDirection}
      justify={justify}
      theme={theme}
    >
      {children}
    </PanelFlxWrap>
  );
}

export const PanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  width: calc(100% - 24px);

  & + div {
    padding-top: 0;
  }
`;

const PanelWrap = styled.div`
  padding: 8px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 12px;
  background-color: #fff;
  transition: all 0.4s linear;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.26),
    1px 1px 4px 0 rgba(0, 0, 0, 0.26);
`;

const PanelFlxWrap = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justify};
  flex: ${(props) => props.flex};
  padding: ${(props) => props.padding}px;
  width: ${(props) => props.width - props.padding * 2}px;
  height: ${(props) => props.height - props.padding * 2}px;
  min-width: 100px;
  min-height: 100px;
  transform: scale(0);
  background: ${(props) => props.theme.backgroundColor};
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: ${(props) => props.theme.borderColor};

  &.show {
    animation-name: showItem;
    animation-duration: 0.4s;
    /* animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); */
    animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
    animation-fill-mode: forwards;
    animation-direction: normal;
  }
  &.hide {
    animation-name: hideItem;
    animation-duration: 0.4s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    animation-fill-mode: forwards;
    animation-direction: normal;
  }

  @keyframes showItem {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes hideItem {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes shakeItem {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  @media (max-width: 767px) {
    width: calc(100% - 48px);
  }
`;

export const PanelFlexInnerWrap = styled.div`
  display: flex;
  flex: ${(props) => (props.expanded ? 1 : "none")};
  flex-direction: ${(props) => props.direction};
  gap: 12px;

  > * {
    width: ${(props) => (props.expanded ? "inherit" : props.width)};
    height: ${(props) => (props.expanded ? "inherit" : props.height)};
  }
  @media (max-width: 767px) {
    width: 100%;

    > * {
      width: calc(100% - 48px);
      /* height: ${(props) => (props.expanded ? "inherit" : props.height)}; */
    }
  }
`;

export const PanelFooterWrap = styled.div`
  display: flex;
  background-color: coral;
`;

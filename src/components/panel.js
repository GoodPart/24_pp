import styled from "styled-components";

export default function Panel({ width = 200, height = 200, children }) {

  return (
    <PanelWrap width={width} height={height}>
      {children}
    </PanelWrap>
  );
}

export function PanelFlx({ flex = 1, width = 100, height = 100, padding=12,children }) {
  return <PanelFlxWrap className="show" flex={flex} width={width} height={height} padding={padding} >{children}</PanelFlxWrap>;
}

export const PanelWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
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
  flex: ${(props) => props.flex};
  padding: ${(props) => props.padding}px;
  width: ${(props) => props.width - (props.padding * 2)}px;
  height: ${(props) => props.height - (props.padding * 2)}px;
  min-width: 100px;
  min-height: 100px;
  /* border-radius: 12px; */
  /* background-color: #fff; */
  transform: scale(0);
  background: rgba( 255, 255, 255, 0.7 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

    &.show {
      animation-name: showItem;
      animation-duration: .4s;
      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
      animation-fill-mode: forwards;
      animation-direction: normal;
    };
    &.hide {
      animation-name: hideItem;
      animation-duration: .4s;
      animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      animation-fill-mode: forwards;
      animation-direction: normal;
    };

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
`;


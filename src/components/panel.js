import styled from "styled-components";

export default function Panel({ width = 200, height = 200, children }) {
  return (
    <PanelWrap width={width} height={height}>
      {children}
    </PanelWrap>
  );
}

export function PanelFlx({ flex = 1, children }) {
  return <PanelFlxWrap flex={flex}>{children}</PanelFlxWrap>;
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
  padding: 8px;
  flex: ${(props) => props.flex};
  min-width: 100px;
  min-height: 100px;
  border-radius: 12px;
  background-color: #fff;
  transition: all 0.4s linear;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.26),
    1px 1px 4px 0 rgba(0, 0, 0, 0.26);
`;

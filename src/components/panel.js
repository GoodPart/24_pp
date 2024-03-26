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
  minHeight,
  padding = 12,
  flexDirection = "row",
  justify = "start",
  addClassName = "",
  overflow,
  theme,
  gap = "",
  children,
}) {
  return (
    <PanelFlxWrap
      className={`show ${addClassName}`}
      $flex={flex}
      $width={width}
      $height={height}
      $padding={padding}
      $minHeight={minHeight}
      $flexDirection={flexDirection}
      $justify={justify}
      $overflow={overflow}
      theme={theme}
      $gap={gap}
    >
      {children}
    </PanelFlxWrap>
  );
}

export const PanelWrapper = styled.div`
  position: relative;
  z-index : 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px;
  width: calc(100% - 24px);

  & + div {
    padding-top: 0;
  }
  & + div {
    z-index : 0
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
  flex-direction: ${(props) => props.$flexDirection};
  justify-content: ${(props) => props.$justify};
  flex: ${(props) => props.$flex};
  padding: ${(props) => props.$padding}px;
  width: ${(props) => props.$width - props.$padding * 2}px;
  height: ${(props) => props.$height == 'auto' ?props.$height : (props.$height - props.$padding * 2)+'px'};
  gap : ${props=> props.$gap}px;
  min-width: 100px;
  min-height: ${props => props.$minHeight == 'auto' ? props.$minHeight : '100px' };
  transform: scale(0);
  background: ${(props) => props.theme.backgroundColor};
  transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: ${(props) => props.theme.borderColor};


  &.exp {
    position: absolute;
  }

 & .show {
  &:hover {
  }
 }

  

  &.show {
    overflow: ${props=> props.$overflow ? "hidden" : ""};
    animation-name: showItem;
    animation-duration: 0.4s;
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
  flex: ${(props) => (props.$expanded ? 1 : "none")};
  flex-direction: ${(props) => props.$direction};
  flex-wrap: ${props=>props.$flexWrap ? "wrap" : ""};
  gap: ${props => props.$gap ? props.$gap : "12"}px;

  > * {
    width: ${(props) => (props.$expanded ? "inherit" : props.width)};
    height: ${(props) => (props.$expanded ? "" : props.height)};
  }
  @media (max-width: 767px) {
    width: 100%;

    > * {
      width: calc(100% - 48px);
      /* height: ${(props) => (props.$expanded ? "inherit" : props.height)}; */
    }

    &.widgets {
      flex-direction: row;
      div:last-child {
        flex: 1;
      }
    }
  }
`;

export const PanelFooterWrap = styled.div`
  display: flex;
  background-color: coral;

  
`;


// export const ExpandedPanel = styled.div`
//   display: flex;
//   flex-direction: ${(props) => props.direction};
//   gap: 12px;
//   background-color: ${props => props.theme.backgroundColorDepth2};
//   width: 100px;
//   height: 100px;
//   border-radius: 12px;
//   transition: .7s cubic-bezier(0.22, 1, 0.36, 1);

    


//   &.exp {
//     position: fixed;
//     width: 100vw;
//     height: 100vh;
//     flex: 0;
//     background: antiquewhite;
//     transform: translate(-37px, -529px);
//   }

// `
export function ExpandedPanel({ id, children }) {
  return <ExpPanel id={id} >
      {children}
  </ExpPanel>
};

const ExpPanel = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 12px;
  background-color: ${props => props.theme.backgroundColor100};
  color: ${props => props.theme.textColor};
  width: 125px;
  height: 125px;
  border-radius: 12px;
  transition: .7s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width : 1023px) and (min-width : 768px) {
    width : 80px;
    height : 80px
  }
  @media (max-width: 767px) {
    width : 80px
  }

`

export function DetailPanel({ data, onclick, children }) {
  const _this = data;
  
  const getInfo = _this.target.doWhat != null ? Object.values(_this.target.doWhat).map((ele, index) => {

    const _since = ele.since == -1 ? "진행중" : ele.since + "개월"
    const _do = ele.do.map((t, index) => {
      return <p key={index}>{t}</p>
    })

    return (
      <div key={index}>
        <dt># {ele.title}, {_since}</dt>
        <dd>{_do}</dd>
      </div>
    )
  }) : "loading...";

  const splitDate = ({since}) => {
    let changeType = String(since);
    return changeType.slice(0, 2) + '.' + changeType.slice(2)
  }
  
    
  return <NextView className={data.state ? "show" : ""}>
    <button className="detail-link" onClick={(e) => onclick({ data: "close", target: data })}> <img src={`${process.env.PUBLIC_URL}/next.png`} /></button>

    <dl>
      <dt className="title">
        <div>{_this.target.title}</div>
        {_this.target.since ? <div>{splitDate({ since: _this.target.since.from })} ~ {_this.target.since.to === -1 ? "재직중" : `퇴사(${splitDate({ since: _this.target.since.to })})`}</div> : ""}
        
      </dt>
      <dd className="heading_1"><span>{_this.target.rank}</span> | <span>{_this.target.job}</span></dd>
      <dd>{ _this.target.desc}</dd>
    </dl>
    
    <dl className="do-infomation">
      {getInfo}
    </dl>


      
  </NextView>
}
export const NextView = styled.div`
  position: absolute;
  top: 0;
  left: 103%;
  padding: 48px 48px 24px;
  width : calc(100% - 96px);
  height : calc(100% - 72px);
  background-color: ${props => props.theme.backgroundColorDepth2};
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: .7s cubic-bezier(0.22, 1, 0.36, 1);
  border-radius: 10px;
  border: ${(props) => props.theme.borderColor};

  &.show {
    left: 0;
  }

  .detail-link {
      position: absolute;
      top: 12px;
      right: 12px;
      cursor: pointer;
      border: none;
      background-color: transparent;
      padding: 4px 12px;
      transform: rotate(180deg);

      img {
          width : 24px;
          animation-name: arrow;
          animation-duration: .6s;
          animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
          animation-iteration-count: infinite;
          animation-direction: alternate;
          filter: ${props => props.theme.invert};
      }

  }
  dl {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    dt,dd {
        color: ${props => props.theme.textColor};
        
        a {
            /* text-decoration: none; */
            color: inherit

        }
    }
    dt.title {
        display: flex;
        justify-content: space-between;
        font-size : 20px;
        font-weight: 900;

        div:last-child {
          font-size :14px;
          /* font-weight : 500; */
        }
    }
    dl dd.heading_1 {
        font-size: 14px;
        font-weight: 500;
    }
    dl dd.heading_4 {
        font-size: 14px;
    }
    dl dd {
      padding: 12px;
      font-size: 14px;
      color : #444;
      background-color: #ededed;
      border-radius: 8px;
    }
    dl dd.location a{
        display: inline-flex;
        align-items: center;
        &:hover {
            img {
                animation-name: jumping;
                animation-duration: .4s;
                animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
                animation-iteration-count: infinite;
                animation-direction: alternate;
            }
        }
    }

    dl.do-infomation {
      margin-top: 36px;
      display: flex;
      flex-direction: column;
      gap: 24px;

      > div {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      dt {
        font-size: 18px;
        font-weight: 700;
      }
      dd {
        padding: 12px;
        font-size: 14px;
        color : #444;
        background-color: #ededed;
        border-radius: 8px;
        
      }
      dd p{
        position: relative;

        & + p {
          margin-top: 4px;
        }

        &:before {
          content: '-';
          display: inline-block;
          margin-right: 4px;
          font-weight: bold;
        }
      }
      
    }
`
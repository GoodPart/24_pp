import styled from "styled-components"

export default function Popup({ floatData, children, onclick }) {
    let windowData = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    return <PopupLayer
        state={floatData.state}
        x={floatData.windowCalcData.x}
        y={floatData.windowCalcData.y}
    >
        <button onClick={() => onclick({ data: "close" })}>닫기</button>
        <PopupWrap>
            {children}
        </PopupWrap>
    </PopupLayer>
}

const PopupLayer = styled.div`
    position: fixed;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    transform: ${props => props.state ? `translate(${-props.x}px, ${-props.y}px)` : `translate(${0}, ${0})`};
    width : ${props => props.state ? 100 : 0}vw;
    height: ${props => props.state ? 100 : 0}vh;
    transition: 2s cubic-bezier(0.22, 1, 0.36, 1);
    background: ${props => props.theme.white};

    

    > div, button {
        display:  ${props => props.state ? "block" : "none"};
        opacity : 0;
        animation-name: showing;
        animation-duration: .4s;
        animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
        animation-delay: .4s;
        animation-fill-mode: forwards;
        animation-direction: normal;

    }
   

   @keyframes showing {
    0% {
        opacity : 0
    }
    100% {
        opacity : 1;
    }
   }
` 

const PopupWrap = styled.div`
    overflow-y: auto;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    
    
`
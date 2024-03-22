import styled from "styled-components"

export function Pages({ id, testState, onclick, children }) {
    const targetCheck = testState.id == id && testState.state ? true : false;

    return <PagesWrap id={id} $testState={testState} className={targetCheck ? "exp" : ""}
    onMouseDown={(e) => {
            if (targetCheck) {
                
            } else {
                onclick({ data: "asd" }, e)
                
            }
        }}
    >
        <img src={`${process.env.PUBLIC_URL}/logos/${children.img}`} />
        {/* <h1>{ children.title}</h1> */}
        <InnerPage className={targetCheck ? "show" : ""}>
            <h1>{children.title}</h1>
            <div style={{display : "none",height : 100}}>{children.desc}</div>
            {
                Object.values(children.data).map((ele, index) => (<dl key={index}><dt>{ele.title}</dt><dd>{ ele.desc}</dd></dl>) )
            }
        </InnerPage>
        <CloseBtn className={targetCheck ? "show" : ""} onMouseDown={() => onclick({ data: "close" })}>닫기</CloseBtn>
    </PagesWrap>
}

const PagesWrap = styled.div`
    z-index : 10;
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    width: inherit;
    height: inherit;
    background-color: ${props => props.theme.backgroundColor100};
    transition: all 1s cubic-bezier(0.22, 1, 0.36, 1);

    &:hover {
        /* transform: scale(1.05); */
        /* background: ${props => props.theme.linearGradientColor}; */
    }

    > h1 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        width : calc(100% - 24px);
        height : calc(100% - 24px);
        transition: all .7s cubic-bezier(0.22, 1, 0.36, 1);
    }

    &.exp {
        cursor: default;
        pointer-events: visible;
        border-radius: 0px;
        z-index : 99999;
        position : fixed;
        width: 100vw;
        height: 100vh;
        flex: 0;
        transform: ${props => `translate(-${props.$testState.windowCalcData.getX}px, -${props.$testState.windowCalcData.getY}px)`};
    
        img {
            pointer-events: none;
            transform : translate(-50%, -50%) scale(.7);
           
        }
    }


    @keyframes ipornAppOpen {
        0% {
            z-index : 0;
        }
        100% {
            z-index : 100;
        }
    }
`

const InnerPage = styled.div`
    pointer-events: none;
    opacity : 0;
    margin: 0 auto;
    width: 0;
    /* height: 100%; */
    height: 0;
    /* background-color: ${props => props.theme.backgroundColor100}; */
    background-color: coral;
    transition: opacity .2s cubic-bezier(0.075, 0.82, 0.165, 1);

    &.show {
        position: relative;
        z-index: 999;
        pointer-events: auto;
        width : 1200px;
        opacity: 1;
        transition: opacity .4s 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    dl {
        display: none;
    }

    @media (max-width : 1023px) and (min-width : 768px) {
        &.show {
            width : 600px;
        }
    }
    @media (max-width: 767px) {
        &.show {
            width : auto;
        }
    }

    
`
const CloseBtn = styled.button`
    position: absolute;
    display: none;
    top: 10%;
    right: 10%;
    width : 30px;
    height: 30px;

    &.show {
        display: block;
        z-index: 9999;
    }
`
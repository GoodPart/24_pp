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
            <CloseBtn className={targetCheck ? "show" : ""} onMouseDown={() => onclick({ data: "close" })}>닫기</CloseBtn>
        <InnerPage className={targetCheck ? "show" : ""}>

            <h1 className="title">{children.title}</h1>
            <div className="desc">{children.desc}</div>
            {
                Object.values(children.data).map((ele, index) => (<dl key={index}><dt>{ele.title}</dt>{ele.desc.map((ele, index) => (<dd>{ index+1}. {ele}</dd>)) }</dl>) )
            }
        </InnerPage>
    </PagesWrap>
}

const PagesWrap = styled.div`
    overflow: hidden;
    z-index : 10;
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    width: inherit;
    height: inherit;
    background-color: ${props => props.theme.backgroundColor100};
    transition: width .7s cubic-bezier(0.22, 1, 0.36, 1), height .7s cubic-bezier(0.22, 1, 0.36, 1), transform .7s cubic-bezier(0.22, 1, 0.36, 1), z-index .7s cubic-bezier(0.22, 1, 0.36, 1) ;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${props => props.theme.backgroundColor100};
        z-index :1000;
    }

    img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        width : calc(100% - 24px);
        height : calc(100% - 24px);
        transition: translate .7s cubic-bezier(0.22, 1, 0.36, 1);
        z-index: 2000;
    }

    &.exp {
        cursor: default;
        pointer-events: visible;
        border-radius: 0px;
        z-index : 99999;
        width: 100vw;
        height: 100vh;
        flex: 0;
        transform: ${props => `translate(-${props.$testState.windowCalcData.getX}px, -${props.$testState.windowCalcData.getY}px)`};
    
        img {
            pointer-events: none;
            transform : translate(-50%, -50%) scale(.5);
            animation-name : hide;
            animation-duration : .6s;
            animation-delay : 1s;
            animation-timing-function : cubic-bezier(0.075, 0.82, 0.165, 1);
            animation-fill-mode : forwards;
        }
        &:after {
            animation-name : hide;
            animation-duration : .6s;
            animation-delay : 1s;
            animation-timing-function : cubic-bezier(0.075, 0.82, 0.165, 1);
            animation-fill-mode : forwards;
        }
    }

    @keyframes hide {
        0%{
            opacity : 1
        }
        90% {
            pointer-events : none
        }
        100% {
            opacity : 0
        }
    }
 
    @media (max-width: 767px) {
       &.exp {
        transform: ${props => `translate(-${props.$testState.windowCalcData.getX}px, -${props.$testState.windowCalcData.getY}px)`};
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
    overflow: hidden;
    pointer-events: none;
    opacity : 0;
    margin: 0 auto;
    width: 0;
    transition: opacity .2s cubic-bezier(0.075, 0.82, 0.165, 1);
    flex-direction: column;
    justify-content: center;
    padding: 100px 0 0;
    

    

    &.show {
        position: relative;
        z-index: 999;
        pointer-events: auto;
        width : 1200px;
        opacity: 1;
        transition: opacity .4s 1s cubic-bezier(0.075, 0.82, 0.165, 1);

        .title {
            font-size: 72px;
            font-weight : 900;
        }
        .desc {
            margin-top: 24px;
            font-size : 28px;
            white-space: pre-wrap;
            line-height: 40px;
        }

        dl {
            flex-direction: column;
            gap: 4px;
            margin-top: 24px;
        }
        dt {
            font-size: 24px;
            font-weight: 700;
        }
        dd {
            font-size : 20px;
        }
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
    top: 10%;
    right: 10%;
    width : 30px;
    height: 30px;

    &.show {
        display: block;
        z-index: 9999;
    }
`
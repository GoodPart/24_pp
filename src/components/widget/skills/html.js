import styled from "styled-components"

export const html = {
    img: "html.svg",
    title: "HTML",
    data: [
        {
            title: "경험",
            desc: [
                "시멘틱한 마크업 구조를 사용하도록 노력합니다.",
                "문서화된 구조를 지양합니다.",
            ],
        }
    ],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}


export function Pages({ id, testState, onclick, children }) {
    const targetCheck = testState.id == id && testState.state ? true : false;

    return <PagesWrap id={id} testState={testState} className={targetCheck ? "exp" : ""} onClick={(e) => onclick({ data: "asd" }, e)}>
        <div style={{ padding: 12, width: "inherit", height : "inherit"}}>
        {
            <img src={`${process.env.PUBLIC_URL}/logos/${children.img}`} />
        }
        <button onMouseDown={() => onclick({ data: "close" })}>닫기</button>

        </div>
        
        {/* <h1>{_title}</h1> */}
    </PagesWrap>
}

const PagesWrap = styled.div`
    z-index : 10;
    border-radius: 8px;
    cursor: pointer;
    position: fixed;
    width: inherit;
    height: inherit;
    background-color: #fff;
    transition: all .8s cubic-bezier(0.22, 1, 0.36, 1);

    img {
        pointer-events: none;
        width : 80px;
        height : 80px
    }
    h1 {
        display: flex;
        width : 100%;
        height: 100%;
        align-items : center;
        justify-content: center;
    }

    &.exp {
        border-radius: 0px;
        z-index : 100;
        position : fixed;
        width: 100vw;
        height: 100vh;
        flex: 0;
        transform: ${props => `translate(-${props.testState.windowCalcData.getX}px, -${props.testState.windowCalcData.getY}px)`};
    
        img {
            width : 80px;
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
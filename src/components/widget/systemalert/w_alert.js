import styled from "styled-components";


export const OsAlert = ({onclick, state }) => {
    const data = {
        title: "Welcome to myHome User",
        rank: "Take a quick tour to learn about great new features",
        
    }
    return <Wrapper className={state.state ? "" : "hide"}>
        <div className="wrap__item">
            <div className="company_icon">
                <img src="https://pbs.twimg.com/profile_images/1343164971681599488/ZV30t8pJ_400x400.jpg" />
            </div>
            <dl>
                <dt className="title">{data.title}</dt>
                <dd className="heading_1"><span>{data.rank}</span></dd>

            </dl>
            <div className="functions">
                <div><button onClick={(e) => onclick({action : ""})}>Done</button></div>
                <div>
                    <button onClick={(e) => onclick({ action: "latter"})}>Latter</button>
                </div>
            </div>
        </div>
    </Wrapper>
}

export const Wrapper = styled.div`
    z-index : 1000;
    position: fixed;
    display: flex;
    align-items: center;
    top: 12px;
    /* right: 12px; */
    right: -600px;
    /* width: 500px; */
    background: ${(props) => props.theme.backgroundColor};
    transition: background-color 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.borderColor};

    animation-name: alerting;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-fill-mode: forwards;

    &.hide {
        animation-name: hiding;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
    }

    .wrap__item {
        display: flex;
        gap: 6px;
        flex : 1;

       
        .company_icon {
            display: flex;
            padding: 16px 0 16px 16px;
            align-items: center;

            img {
                overflow: hidden;
                width: 50px;
                height: 50px;
                border-radius: 100px;
                width: 100%;
            }
        }
    }
    dl {
        padding: 12px;
        flex: 1;
        color: ${props => props.theme.textColor};

    }

    dl dt {
        font-weight : 600
    }
    dl dd {
        margin-top: 12px;
        font-size: 14px;
        line-height: 16px;
    }

    .functions {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: .3;


        &:after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0;
            width : 100%;
            height: 2px;
            background-color: ${props=> props.theme.borderColor};
        }
        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width : 2px;
            height: 100%;
            background-color: ${props=> props.theme.borderColor};
        }

        div {
            height: 100%;
        }
        button {
            cursor: pointer;
            background-color : transparent;
            border: none;
            width:100%;
            height: 100%;
        color: ${props => props.theme.textColor};

        }
    }
    @keyframes alerting {
        0% {
            right: -600px;
        }
        100% {
            right: 12px;
        }
    }
    @keyframes hiding {
        0% {
            top : 12px;
            right : 12px;
        }
        30% {
            top: 24px;
            right: 12px;
            
        }
        100% {
            right: -600px;
            top : 24px;

        }
    }
`

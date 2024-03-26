import styled from "styled-components";
import { Label } from "../w_label";

export function Career({ data, onclick }) {
    const goDetail = () => {
        return data.rank === "고등학교" || data.rank === "대학교" ? false : true 
    }

    
    const doList = data.do && Object.values(data.do).map((ele, index) => {
        return <div className="do-list__item" key={index}>
            <Label _path_="logos" imgName={ele} labelName={ele} size={12} />
        </div>
    })
    return <Wrapper className="career-wrap">
        <div className="wrap__item">
            <div>
                <div className="company_icon">
                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <dl>
                    <dt className="title">{data.title}</dt>
                    <dd className="heading_1"><span>{data.rank}</span> | <span>{data.job}</span></dd>
                    <dd className="heading_4 location"><a href={data.location.path} target="_blank"><img src={`${process.env.PUBLIC_URL}/images/location.svg`} width={16} /><span>{data.location.name}</span></a></dd>

                </dl>
            </div>
            <div>
                <div className="stay">
                    {data.rank === "고등학교" || data.rank === "대학교" ? <span>졸업</span> : <span>{data.state ? "재직중" : "퇴사"}</span>} 
                </div>
                {
                    data.rank === "고등학교" || data.rank === "대학교" ? "" : <button className="detail-link" onClick={(e) => onclick({ data: "open", target: data })}><img src={`${process.env.PUBLIC_URL}/next.png`} /></button>
                }
            </div>
        </div>
        <div className="wrap__item">
            <div className="do-list">
                <div>
                    {doList}
                </div>
            </div>
        </div>
    </Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width : 100%;
    gap: 12px;

    .wrap__item {
        display: flex;
        justify-content: space-between;
        width : 100%;

        &:first-child div:first-child {
            display: flex;
            gap: 12px;

        }
    }
    .detail-link {
        margin-top: 4px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        padding: 4px 12px;
        img {
            width : 24px;
            animation-name: arrow;
            animation-duration: .6s;
            animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
            animation-iteration-count: infinite;
            animation-direction: alternate;
            filter: ${props=> props.theme.invert};
        }

    }
    
    .stay {
        border-radius: 4px;
        padding: 4px 12px;
        border-width: 2px;
        border-style: solid;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 1px;
       
    }

    .company_icon {
        display: flex;
        padding : 12px;
        background-color: ${props => props.theme.textColor};
        border-radius: 8px;
        height: 30px;
        
        svg {
            stroke:${props => props.theme.backgroundColorDepth2};;
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
        font-size : 22px;
        font-weight: 900;
    }
    dl dd.heading_1 {
        font-size: 16px;
        font-weight: 500;
    }
    dl dd.heading_4 {
        font-size: 14px;
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

    .do-list {
        border-top-width: 1px;
        border-style: solid;
        border-color: ${props => props.theme.borderColor};
        padding-top : 12px;
        width : 100%;
        > div {
            display: flex;
            flex-wrap: wrap;

        }
    }
    .do-list__item {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size : 12px;
        padding: 4px 6px;
        text-transform: uppercase;
        font-weight: 600;
    }


    @keyframes jumping {
        0% {
                transform: translateY(0px);
            
        }
        100% {
                transform: translateY(-4px);

        }
    }

    @keyframes arrow {
        0% {
                transform: translateX(0px);
            
        }
        100% {
                transform: translateX(8px);

        }
    }

    
`
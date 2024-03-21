import styled from "styled-components";


export function Career({ data, onclick }) {

    const doList = data.do && Object.values(data.do).map((ele, index) => {
        return <div className="do-list__item" key={index}>{ele}</div>
    })
    return <Wrapper className="career-wrap">
        <div className="company_icon">
            <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 20H21V10C21 8.89543 20.1046 8 19 8H15M11 16H11.01M17 16H17.01M7 16H7.01M11 12H11.01M17 12H17.01M7 12H7.01M11 8H11.01M7 8H7.01M15 20V6C15 4.89543 14.1046 4 13 4H5C3.89543 4 3 4.89543 3 6V20H15Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>

        {data.state ? <div className="stay"><span>재직중</span></div> : ""}
        <button className="detail-link" onClick={(e)=> onclick({data :"open", target : data})}> 디테일</button>

        <dl>
            <dt className="title">{data.title}</dt>
            {/* <dd className="desc">{data.desc}</dd> */}
            <dd className="heading_1"><span>{data.rank}</span> | <span>{data.job}</span></dd>
            <dd className="heading_4 location"><a href={data.location.path} target="_blank"><img src={`${process.env.PUBLIC_URL}/images/location.svg`} width={24} /><span>{data.location.name}</span></a></dd>
            <dd className="do-list">
                <div>
                {doList}
                </div>
            </dd>
        </dl>
        {/* <div>
            {data.since.from}
        </div> */}

    </Wrapper>
}

const Wrapper = styled.div`
    /* position: relative; */
    display: flex;
    width : 100%;
    gap: 12px;

    .detail-link {
        position: absolute;
        top: 50%;
        right : 10%;
        transform: translateY(-50%);
        width : 40px;
    }
    
    .stay {
        pointer-events: none;
        position: absolute;
        top: 50%;
        left : 50%;
        transform: translate(-50%, -50%);
        width : 100%;
        height: 100%;
        border-width: 2px;
        border-style: solid;
        /* border-color: ${props=> props.theme.point}; */
        border-radius: 8px;

        span {
            display: none;
        }
    }

    .company_icon {
        display: flex;
        padding : 12px;
        background-color: ${props => props.theme.textColor};
        border-radius: 8px;
        height: 60px;
        
        svg {
            stroke:${props => props.theme.backgroundColorDepth2};;
        }
    }

    dl {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    dt,dd {
        color: ${props => props.theme.textColor};
        
        a {
            text-decoration: none;
            color: inherit

        }
    }
    dt.title {
        font-size : 26px;
        font-weight: 700;
    }
    dl dd.heading_1 {
        font-size: 18px;
        font-weight: 500;
    }
    dl dd.heading_4 {
        font-size: 14px;
    }
    dl dd.location a{
        display: flex;
        align-items: center;
        &:hover {
            img {
                animation-name: jumping;
                animation-duration: .3s;
                animation-timing-function: cubic-bezier(0.22, 1, 0.36, 1);
                animation-direction: normal;
            }
        }
    }

    .do-list {
        > div {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;

        }
    }
    .do-list__item {
        font-size : 12px;
        padding: 4px 8px;
        border-radius: 12px;
        border : 2px solid ${props => props.theme.point};
        background-color : ${props => props.theme.backgroundColor100};
        text-transform: uppercase;
        font-weight: bold;
    }


    @keyframes jumping {
        0% {
                transform: translateY(0px);
            
        }
        100% {
                transform: translateY(-4px);

        }
    }
    
`
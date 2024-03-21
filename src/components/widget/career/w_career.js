import styled from "styled-components";


export function Career({ data }) {
    const doList = Object.values(data.do).map((ele, index) => {
        return <div className="do-list__item" key={index}>{ele}</div>
    })
    return <Wrapper className="career-wrap">
        <div className="company_icon">
            <img src={`${process.env.PUBLIC_URL}/images/company.svg`} width={60} />
        </div>

        {data.state ? <div className="stay"><span>재직중</span></div> : ""}

        <dl>
            <dt className="title">{data.title}</dt>
            {/* <dd className="desc">{data.desc}</dd> */}
            <dd className="heading_1">직급 : <span>{data.rank}</span> | 담당 : <span>{data.job}</span></dd>
            <dd className="heading_4 location"><a href={data.location.path} target="_blank"><img src={`${process.env.PUBLIC_URL}/images/location.svg`} width={24} /><span>{data.location.name}</span></a></dd>
            <dd className="do-list">{doList}</dd>
        </dl>
    </Wrapper>
}

const Wrapper = styled.div`
    /* position: relative; */
    display: flex;
    width : 100%;
    gap: 24px;
    
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
        border-color: ${props=> props.theme.point};
        border-radius: 8px;

        span {
            display: none;
        }
    }

    .company_icon {
        display: flex;
        padding : 12px;
        background-color: ${props=> props.theme.point};
        border-radius: 8px;
        height: 60px;
        
    }

    dl {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
    dt,dd {
        color: ${props => props.theme.textColor};
        
        a {
            text-decoration: none;
            color: inherit

        }
    }
    dt.title {
        font-size : 28px;
        font-weight: bold;
    }
    dl dd.heading_1 {
        font-size: 20px;
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
        display: flex;
        gap: 8px;
    }
    .do-list__item {
        font-size : 12px;
        padding: 4px 8px;
        border-radius: 12px;
        border : 2px solid orange;
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
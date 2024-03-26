import styled from "styled-components";
import { PanelFlx } from "../../panel";



export function Etc({ data }) {
    const d = Object.values(data).map((ele, index) => (
        <PanelFlx width={200} height={'auto'} padding={18} flex={'auto'} justify="space-between" flexDirection="column" key={index}>
            <div>
                <div className="title">{ele.title}</div>
                <div className="desc">{ele.desc}</div>
            </div>
            <div className="function__wrap">
                <button className="unlike" type="button">싫어요</button>
                <button className="like" type="button">좋아요</button>
            </div>
        </PanelFlx>
    ));
    return <Wrap>{d}</Wrap>
};

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 8px;

    .title {
        font-size: 16px;
        font-weight: 700;
        color: ${props => props.theme.textColor};

    }
    .desc {
        margin-top: 12px;
        font-size: 14px;
        line-height: 1.25rem;
        padding-bottom: 12px;
        color: ${props => props.theme.textColor};
    }
    .function__wrap {
        padding-top: 12px;
        display: flex;
        justify-content: space-between;
        border-top: 1px solid ${props=> props.theme.borderColor};

        button {
            cursor: pointer;
            width: 49%;
            text-align: center;
            border: none;
            padding: 8px 0;
            border-radius: 4px;
        }
        button.like {
            background-color: ${props => props.theme.point};
        }
      
    }

    @media (max-width : 1400px) and (min-width : 768px) {
        flex: auto;
        overflow-y: scroll;
        height: 300px;
        
        
        * {
            box-shadow: none;
        }
    }
    @media (max-width: 767px) {
        flex: auto;
        overflow-y: scroll;
        width: 100%;
        height: 500px;
        .desc {
            min-height: 30px;
        }
        * {
            box-shadow: none;
        }
    }
    
`
const Item = styled.div`
    flex: 1;
    width: 100%;
`

const PanelItem = styled.div`
    
`

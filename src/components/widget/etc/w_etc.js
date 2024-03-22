import styled from "styled-components";
import { PanelFlx } from "../../panel";



export function Etc({ data }) {
    const d = Object.values(data).map((ele, index) => (
        <PanelFlx width={200} height={'auto'} padding={24} flex={'auto'} justify="space-between" flexDirection="column" key={index}>
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
    gap: 12px;

    .title {
        font-size: 24px;
        font-weight: 700;
        color: ${props => props.theme.textColor};

    }
    .desc {
        margin-top: 12px;
        font-size: 16px;
        line-height: 1.25rem;
        min-height: 80px;
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
`
const Item = styled.div`
    flex: 1;
    width: 100%;
`

const PanelItem = styled.div`
    
`
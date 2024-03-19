import styled from "styled-components";
export default function FloatWrap({ data, onclick }) {
    const _title = data.title;

    return <FloatContainer onClick={(e) => onclick({data: data}, e)}>
        {
            data ? <img src={`${process.env.PUBLIC_URL}/logos/${data.img}`} /> : "loading"
        }
        <h1>{_title}</h1>
    </FloatContainer>
}

const FloatContainer = styled.div`
cursor: pointer;
    overflow: hidden;
    width: 100%;
    height: 100%;


    img {
        pointer-events: none;
        text-align: center;
        width : 100%;
        height : 100%
    }
    h1 {
        display: flex;
        width : 100%;
        height: 100%;
        align-items : center;
        justify-content: center;
        color: ${props => props.theme.textColor};
    }

    &:hover {
        img {
            opacity : 0;
        }
        h1 {
            margin-top: -100%;
        }
    }
`

const Wrapper = styled.div`
    /* display: none; */
`

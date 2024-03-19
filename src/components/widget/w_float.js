import styled from "styled-components";

export default function FloatWrap({ data, onclick }) {
    const _title = data.title;
    const _desc = data.desc;

    return <FloatContainer onClick={(e) => onclick({data: data}, e)}>
        <img src={data.img} />
        <h1>{_title}</h1>
    </FloatContainer>
}

const FloatContainer = styled.div`
cursor: pointer;
    overflow: hidden;
    transition:  1s linear;

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

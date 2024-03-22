import styled from "styled-components";



export function Etc({ data }) {
    const d = Object.values(data).map((ele, index) => (<Item key={index}> {ele.title} { ele.desc}</Item>));
    return <Wrap>
       {d}
    </Wrap>
};

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Item = styled.div`
    flex: 1;
    width: 100%;
    
`
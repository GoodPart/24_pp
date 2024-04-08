import styled from "styled-components"

export function Toggle({onclick, state  }) {
    return <Wrapper>
        <input id="check1" type="checkbox" onChange={onclick} checked={state}></input>
        <label htmlFor="check1">
            <div className="fk_toggle"></div>
        </label>
    </Wrapper>
}

export const Wrapper = styled.div`
    width: 30px;
    height: 100%;
    background-color: #eee;
    border-radius: 8px;

    input {
        display: none;

        &:checked {
           
            &+ label .fk_toggle {
                transform: translateX(100%);
            }
        }
    }
    input + label {
        cursor: pointer;
        display: block;
        height: 100%;
    }
    .fk_toggle {
        width : 50%;
        height : 100%;
        background-color: ${props => props.theme.backgroundColor100};
        transition: transform .7s cubic-bezier(0.075, 0.82, 0.165, 1);
        border-radius: 8px;
        outline: 1px solid ${props=> props.theme.borderColor};
    }
    

    @media (max-width: 767px) {
        height: 60%;
    }
` 
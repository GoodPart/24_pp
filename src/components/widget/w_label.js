import styled from "styled-components"


export const Label = ({
    root = process.env.PUBLIC_URL,
    _path_,
    imgName,
    labelName,
    size=12
}) => {

    const onErrorImg = (e) => {
        e.target.src = `${root}/${_path_}/home.svg`
    }
    return <LabelItem>
        <img src={`${root}/${_path_}/${imgName}.svg`} width={size} onError={onErrorImg} /><span>{labelName}</span>
    </LabelItem>
}

export const LabelItem = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: ${props => props.theme.textColor};

`

export const LabelItemInlineDesc = styled.span`
    margin-left: 6px;

    * {
        color: ${props => props.theme.textColor};
    }
`

export const LabelTextField = ({ labelName, id, onChange, value }) => {

    return <InputWrapper>
        <input type="text" id={id} value={value} onChange={(e) => onChange(e.target.value)}/>
        <label htmlFor={id} className={value != "" ? "inV" : ""}>{labelName}</label>
    </InputWrapper>
}


export const InputWrapper = styled.div`
    position: relative;
    width : 100%;

    input {
        padding : 24px 24px;
        width : calc(100% - 48px);
        border-radius : 8px;
        border: none;

        &:focus {
            & + label {
                top: 0;
                transform: translateY(6px);
                font-size: 12px;
                font-weight : bold

            }
        }
        
    } 

    input + label {
        position: absolute;
        left: 12px;
        top : 50%;
        transform: translateY(-50%);
        transition:  .6s cubic-bezier(0.075, 0.82, 0.165, 1);

        &.inV {
            top: 0;
            transform: translateY(6px);
            font-size: 12px;
            font-weight : bold
        }
    }
`



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
import { PanelFlx } from "../../panel";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart, faPersonWalking, faBrain, faNewspaper, faRocket, faShuffle} from '@fortawesome/free-solid-svg-icons';

const Icon = (index) => {
    const iconList = [
        faShuffle, faNewspaper, faHandHoldingHeart, faBrain,faPersonWalking, faRocket,
    ]

    return <FontAwesomeIcon className="fa-2x"  icon={iconList[index]} />
    
}

export const NewsCategory = ({ newsData, onclick }) => {

    
    return Object.values(newsData).map((item, index) => {
        return (
            <PanelFlx
                id={item.category}
                key={index}
                minHeight={'auto'}
                height={'auto'}
                padding={0}
            >
                <Item onClick={()=>onclick(item.category)} id={item.category}>
                    {Icon(index)}
                    {/* <FontAwesome'Icon icon={item.icon} /> */}
                    <div>{item.name}</div>
                </Item>
            </PanelFlx>
        )
    })
}

const Item = styled.button`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 0;
    color: ${props => props.theme.textColor};
    width : 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    

    div {
        font-size : 20px;
    }

    &.active svg{
        animation-name: scaleUp;
        animation-duration: .8s;
        animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
        animation-fill-mode: forwards;
    }

   
   @keyframes scaleUp {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.2);

    }
   }
`
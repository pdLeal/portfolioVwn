import styled from "styled-components";
import {Video} from '../../components/questionBox/QBox_Style';

export const Flex = styled.div`
    max-width: 100%;
    max-height: 100svh;
    overflow: hidden;
`;

export const OuterBox = styled.div`
    border: solid 10px transparent;
    border-top: none;
    outline: solid 1px red;
    box-shadow: 0px 0px 16px -3px red;
    position: absolute;
    top: ${props => props.$top}px;
    left: ${props => props.$left}px;
    
        .flex {
            display: flex;
            justify-content: center;
            align-items: center
        }

        p.error {
            padding-block: 8px;
            justify-content: space-between;
            backdrop-filter: blur(0.05rem);
        }


        span {
            width: 1.25em;
            aspect-ratio: 1;
            background: radial-gradient(circle, #fd3232, #b01616, #800000);
            border: solid white 0.01em;
        }
    `;

export const InnerBox = styled.div`
    width: ${props => props.$width}px;
    aspect-ratio: ${props => props.$ratio};
    display: grid;
    grid-template-rows: 3fr 1fr;
    align-items: center;
    border-top: dashed 1px red;

        div.evly {
            justify-content: space-evenly;
        }

        .okBg {
            width: 100%;
            height: 100%;
            justify-content: flex-end;
            background-color: transparent;
            backdrop-filter: blur(0.05rem);
            border-top: dashed 1px red;
        }

        .ok {
            width: 35%;
            height:60%;
            margin-right: 18px;
            background-color: transparent;
            border: inset 1px red;
        }
`;

export const HackVideo = styled(Video)`
    position: absolute;
    top: 4px;
`;
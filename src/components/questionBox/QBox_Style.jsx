import styled, { keyframes } from "styled-components";

import { Button, H3 } from '../hello/Hello_Style';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const grow = keyframes`
    0% {
        width: 0;
        height: 0;
        padding: 0;
    }

    45% {
        width: 0;
        height: 100%;
        padding: 0;
    }

    55% {
        width: 0;
        height: 100%;
        padding: 0;
    }

    100% {
        width: 100%;
        height: 100%;
        padding: 8px;
    }
`;

export const Question_Box = styled.div`
    padding: 0;
    width: 0;
    height: 0;
   
    border: solid 1px var(--primary-color);
    box-shadow: inset 0px 0px 20px -8px var(--primary-color);
    animation: ${grow} 3s 250ms linear forwards;

    position: relative;
`;

export const SeeBtn = styled(Button)`
    font-family: "VT323", monospace;
    border: none;
    box-shadow: none;
    `;

export const Bot_Talk = styled(H3)`
    font-family: "VT323", monospace;
`;

export const Anwsers = styled.div`

`;
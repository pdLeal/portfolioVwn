import styled, { keyframes } from "styled-components";

import { Button } from '../hello/Hello_Style';

export const Container = styled.div`
    font-family: "VT323", monospace;
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const SeeBtn = styled(Button)`
        border: none;
        box-shadow: none;
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
    display: grid;
    grid-template-rows: max-content 1fr;
   
    border: solid 1px var(--primary-color);
    box-shadow: inset 0px 0px 20px -8px var(--primary-color);
    animation: ${grow} 3s 250ms linear forwards;
`;

export const Anwsers = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: center;

        & > :first-child {
            color: red;
            text-shadow: 0px 0px 10px red;
        }
        
        & > :last-child {
            color: blue;
            text-shadow: 0px 0px 10px blue;
        }
`;

export const Label = styled.label`
    &::before {
        content: '';
        display: inline-block;
        width: 0.8em;
        aspect-ratio: 1 / 1;
        border: solid 1px;
    }
`;

export const Input = styled.input`
    display: none;
`;
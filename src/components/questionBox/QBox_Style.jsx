import styled, { keyframes } from "styled-components";

import { Button, H3 } from '../hello/Hello_Style';

export const Container = styled.div`
    font-family: var(--kvn-font);
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
    `;

export const See_Btn = styled(Button)`
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
    max-width: 100%;
    height: 0;
    
    ${props => {
        if (props.$display) { // if(isQuestion) {...}
            return `
            display: grid;
            grid-template-rows: max-content auto;`
        } else {
            return `
            display: flex;
            justify-content: center; align-items: center;`
        }
    }};
    
   
    border: solid 1px var(--primary-color);
    box-shadow: inset 0px 0px 20px -8px var(--primary-color);
    animation: ${grow} 3s 250ms ease-in-out forwards;

    .rightAnswer {
            color: var(--redish);
            text-shadow: 0px 0px 10px red;
        }
`;

export const Anwsers = styled.div`
    
        ${props => {
        if (props.$options == 2) {
            return `
            display: flex;
            justify-content: space-evenly;
            align-self: center;

            & > :nth-child(2) {
                color: var(--blueish);
                text-shadow: 0px 0px 10px blue;
            }
            
            & > :last-child {
                color: var(--redish);
                text-shadow: 0px 0px 10px red;
        }
            `;
        } else {
            return `
            margin-inline: auto;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            justify-items: start;
            column-gap: 16px;
            color: var(--blueish);
            text-shadow: 0px 0px 10px blue;
            `;
        }
    }};
`;

export const Label = styled.label`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

        &::before {
            content: '';
            display: flex;
            justify-content: center;
            align-items: center;
            height: 0.8em;
            aspect-ratio: 1;
            border: solid 1px;
            box-shadow: 0px 0px 3px 1px;
        }
`;

export const Input = styled.input`
    display: none;

        &:checked + ${Label}::before {
            content: 'X';
        }
`;

const goBig = keyframes`
    75% {
        transform: scale(2) rotate(720deg);
    }
    
    100% {
        transform: scale(1);
    }
`;

export const Question_Transition = styled(H3)`
    transform: scale(0) rotate(0deg);
    animation: ${goBig} 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

export const Text_Input = styled.input`
    width: 90%;
    margin-inline: auto;
    padding-inline: 8px;
    font-family: inherit;
    font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
    line-height:1.5em;
    color: var(--blueish);
    align-self: center;
    background-color: transparent;
    border: solid 1px var(--primary-color);
    text-shadow: 0px 0px 10px blue;
    outline: none;
`;

export const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    
`;

export const Video_Wrapper = styled.div`
    position: fixed;
    inset: 0;
    z-index: 99;
`;
import styled, { keyframes } from "styled-components";

import { Button, H3 } from '../../components/hello/Hello_Style';

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 3vw, 2.5rem);
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 1fr;
    column-gap: 16px;
`;

export const Span = styled.span`
    text-decoration: line-through 0.15em var(--primary-color);
`;

const grow = keyframes`
    to {
        width: 100%;
        height: 100%;
    }
`;

export const Question_Box = styled.section`
    width: 0;
    height: 0;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: solid 1px var(--primary-color);
    box-shadow: inset 0px 0px 20px -8px var(--primary-color);
    animation: ${grow} 1s linear forwards;
`;

export const SeeBtn = styled(Button)`
    font-family: "VT323", monospace;
    border: none;
    box-shadow: none;
    `;

export const Bot_Talk = styled(H3)`
    font-family: "VT323", monospace;
`;
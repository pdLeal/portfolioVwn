import styled, { keyframes, css } from "styled-components";
import { H3 } from '../../components/hello/Hello_Style';

export const Main = styled.main`
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
`;

export const H1 = styled.h1`
    font-size: clamp(2rem, 7vw + 1rem, 6rem);
    color: red;
`;

export const Container = styled.main`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const slideToLeft = keyframes`
    from {
        transform: translateX(100%);
    } to {
        transform: translateX(-50%);
    }
`;

const slideToRight = keyframes`
    from {
        transform: translateX(-100%);
    } to {
        transform: translateX(50%);
    }
`;

export const H2 = styled.h2`
    --animation-duration: 750ms;
    --animation-timing: cubic-bezier(.18,.89,.32,1.28);
    font-size: clamp(1.5rem, 5vw + 1rem, 4rem);
    position: relative;
    white-space: nowrap; /* Evita que o texto quebre em múltiplas linhas */

    ${props => {
        if (props.$direction == 'toRight') {
            return css`
                animation: ${slideToRight} var(--animation-duration) var(--animation-timing) forwards;
                mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
            `
        } else {
            return css`
                animation: ${slideToLeft} var(--animation-duration) var(--animation-timing) forwards;
                mask-image: linear-gradient(to top, black 0%, transparent 50%);
            `
        }
    }}         
`;

export const Tease = styled(H3)`
    font-family: "VT323", monospace;
    margin-inline: auto;
    max-width: 80%;
    text-align: center;
`;
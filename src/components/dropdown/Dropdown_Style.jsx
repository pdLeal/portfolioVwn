import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    padding: 0.5em;
    max-height:${(props) => (props.$isOpen ? "1000px" : `calc(${props.$maxHeight}px + 1em)`)}; // É preciso "deslocar a max-height em 1em p/ compensar o padding de 0.5em"
    overflow: hidden;
    transition: max-height 1s linear;
    border: 1px solid var(--primary-color);

        svg {
            transform: ${(props) => (props.$isOpen ? "rotateZ(0deg)" : "rotateZ(180deg)")};
            transition: transform 1s ease;
        }
`;

export const DropdownTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const onAndOff= keyframes`
    0% {
        color: black;
    }

    94% {
        color: black;
    }

    95% {
        color: white;
    }

    98% {
        color: black;
    }

    100% {
        color: white;
    }
`;

export const HiddenPara = styled.p`
    margin-top: 16px;
    padding-top: 16px;
    border-top: dashed 1px var(--primary-color);
    /* color: var(--bg-color); */
    animation: ${onAndOff} 1250ms forwards;
`;
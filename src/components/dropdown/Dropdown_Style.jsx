import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    padding: 0.5em;
    max-height:${(props) => (props.$isOpen ? "1000px" : `calc(${props.$maxHeight}px + 1em)`)}; // É preciso "deslocar a max-height em 1em p/ compensar o padding de 0.5em"
    margin-bottom: 50px;
    overflow: hidden;
    transition: max-height 1s linear;
    border: 1px solid var(--primary-color);

        svg {
            transform: ${(props) => (props.$isOpen ? "rotateZ(0deg)" : "rotateZ(180deg)")};
            transition: transform 1s ease;
            transition-delay: ${(props) => (props.$isOpen ? "0s" : "500ms")};
        }
`;

export const DropdownTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

const onAndOff= keyframes`
    0% {
        color: black;
    }

    87% {
        color: black;
    }

    89% {
        color: white;
    }

    93% {
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
const offAndOn= keyframes`
    0% {
        color: white;
    }

    3% {
        color: black;
    }

    5% {
        color: white;
    }

    8% {
        color: black;
    }

    10% {
        color: white;
    }

    13% {
        color: black;
    }

    100% {
        color: black;
    }
`;

export const HiddenPara = styled.p`
    margin-top: 16px;
    padding-top: 16px;
    border-top: dashed 1px var(--primary-color);
    animation: ${(props) => (props.$isOpen ? onAndOff : offAndOn)} 1250ms forwards;
`;
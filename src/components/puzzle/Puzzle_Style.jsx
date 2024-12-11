import styled, {keyframes} from "styled-components";


const shakeAnimation = keyframes`
    0% { transform: translate(0, 0); }
    10% { transform: translate(-2px, 0); }
    20% { transform: translate(2px, 0); }
    30% { transform: translate(0, 0); }
    40% { transform: translate(0, 2px); }
    50% { transform: translate(0, -2px); }
    60% { transform: translate(0, 0); }
    70% { transform: translate(-2px, 2px); }
    80% { transform: translate(2px, -2px); }
    90% { transform: translate(-2px, 2px); }
    100% { transform: translate(0, 0); }
`;

export const Container = styled.section`
    width: 80vw;
    max-width: 700px;
    aspect-ratio: 1;
    padding: 8px;
    display: grid;
    grid-template: repeat(${props => props.$layout}, 1fr) / repeat(${props => props.$layout}, 1fr);
    gap: 2px;
    border: solid 1px var(--primary-color); 
    box-shadow: 0px 0px 20px -8px var(--primary-color);
    position: relative;
        
        [data-piece="1"] {
            background-position: 0% 0%;
        }

        [data-piece="2"] {
            background-position: 33% 0%;
        }

        [data-piece="3"] {
            background-position: 66% 0%;
        }

        [data-piece="4"] {
            background-position: 100% 0%;
        }

        [data-piece="5"] {
            background-position: 0% 33%; 
        }

        [data-piece="6"] {
            background-position: 33% 33%;
        }

        [data-piece="7"] {
            background-position: 66% 33%;
        }

        [data-piece="8"] {
            background-position: 100% 33%;
        }

        [data-piece="9"] {
            background-position: 0% 66%; 
        }

        [data-piece="10"] {
            background-position: 33% 66%;
        }

        [data-piece="11"] {
            background-position: 66% 66%;
        }

        [data-piece="12"] {
            background-position: 100% 66%;
        }

        [data-piece="13"] {
            background-position: 0% 100%; 
        }

        [data-piece="14"] {
            background-position: 33% 100%;
        }

        [data-piece="15"] {
            background-position: 66% 100%;
        }

        [data-piece="16"] {
            background-position: 100% 100%;
        }

        .showError {
            transform: translateX(0%);
        }

        .shakePiece {
            animation: ${shakeAnimation} 500ms forwards;
        }
    `;

export const Piece = styled.div`
    height: 100%;
    cursor: pointer;
    background-image: ${props => `url(${props.$imgUrl})`};
    background-size: 400%;
    background-repeat: no-repeat;
    `;

export const ErrorMsg = styled.p`
    font-family: "VT323", monospace;
    margin-inline: auto;
    max-width: 80%;
    padding: 0.2em;
    text-align: center;
    font-size: clamp(1rem, 2vw + 0.5rem, 1.5rem);
    color: var(--primary-color);
    text-shadow: 0px 0px 13px var(--primary-color);

    position: absolute;
    top: 8px;
    right: 0;
    transform: translateX(100%);
    transition: transform 1000ms linear;
    background-color: transparent;
    backdrop-filter: blur(16px);
`;

/* [data-piece="1"] { 3x3 GRID
        background-position: 0% 0%;
    }

    [data-piece="2"] {
        background-position: 50% 0%;
    }

    [data-piece="3"] {
        background-position: 100% 0%;
    }

    [data-piece="4"] {
        background-position: 0% 50%;
    }

    [data-piece="5"] {
        background-position: 50% 50%; 
    }

    [data-piece="6"] {
        background-position: 100% 50%;
    }

    [data-piece="7"] {
        background-position: 0% 100%;
    }

    [data-piece="8"] {
        background-position: 50% 100%;
    }

    [data-piece="9"] {
        background-position: 100% 100%; 
    } */
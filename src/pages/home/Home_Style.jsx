import styled from "styled-components";
import { Tease } from "../denied/Denied_Style.jsx";

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 2vw + 0.5rem, 2.5rem);
    `;

export const About_Section = styled.section`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 1fr;
    gap: 16px;

        @media screen and (max-width: 560px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto 250px;
        }
`;

export const Span = styled.span`
    text-decoration: line-through 0.15em var(--primary-color);
`;

export const Projects = styled.section`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;

        & > button {
            font-size: clamp(0.8rem, 2vw + 0.5rem, 1.3rem);
            color: var(--primary-color);
            text-shadow: 0px 0px 3px var(--primary-color);
            cursor: pointer;
            border: none;
            background-color: transparent;
            
                &:hover,
                &:focus-visible {
                color: #66f666;
                }
                
                &:active {
                color: #2b6a2b;
                }
             }
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 4vw + 0.5rem, 2.5rem);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TextRules = styled(Tease)`
    max-width: 80%;
    margin-inline: 0;
`;

export const Modds = styled.div`
    width: 16%;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #ff440060;
`;

// export const Grid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(40%, 250px));
//     grid-template-rows: min-content auto auto auto auto;
//     justify-content: space-between;
//     align-items: center;
//     gap: 16px;

//     @media screen and (max-width: 644px) {
//         justify-content:center;
//         }
// `;
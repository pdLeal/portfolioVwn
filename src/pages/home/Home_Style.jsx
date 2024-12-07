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
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 4vw + 0.5rem, 2.5rem);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;

        @media screen and (max-width: 1080px) {
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                }

`;

export const Rules = styled.div`
    padding-block: 8px;
    display: grid;
    grid-template-areas:
                        'rules rules'
                        'btn1 btn2'
                        'btn3 btn4';
    justify-content: center;
    align-items: center;
    gap: 16px 8px;
    border: 1px solid #ffff0099;

        >:nth-child(2) {
            grid-area: btn1;
        }
        >:nth-child(3) {
            grid-area: btn2;
        }
        >:nth-child(4) {
            grid-area: btn3;
        }

        @media screen and (max-width: 1080px) {
            flex-wrap: wrap;
            flex-direction: row;
            }
`;

export const TextRules = styled(Tease)`
    /* margin-inline: 0; */
    font-size: clamp(1rem, 3vw + 0.5rem, 1.8rem);
    grid-area: rules;
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
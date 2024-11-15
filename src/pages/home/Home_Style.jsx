import styled from "styled-components";

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
    text-align: center;
    margin-top: 48px;
    padding-block: 24px;
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 4vw + 0.5rem, 2.5rem);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 250px));
    grid-template-rows: min-content auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
`;
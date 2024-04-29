import styled from "styled-components";

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 3vw, 2.5rem);
    `;

export const About = styled.section`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 1fr;
    column-gap: 16px;
    position: relative;

`;

export const Span = styled.span`
    text-decoration: line-through 0.15em var(--primary-color);
`;

export const Projects = styled.section`
    text-align: center;
    margin-top: 48px;
    background-color: #012827;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 250px));
    grid-template-rows: min-content auto auto auto;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;
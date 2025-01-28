import styled from "styled-components";

export const H2 = styled.h2`
    max-width: 80vw;
    margin-block: 48px;
    font-size: clamp(1.1rem, 3vw + 0.5rem, 1.5rem);
    text-align: center;
    margin-inline: auto;
`;

export const Wrapper = styled.div`
    max-width: 80vw;
    margin-bottom: 24px;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

        img {
            max-width: 45%;
        }
`;
import styled
    from "styled-components";

export const Footer = styled.footer`
    padding: 16px;
    margin-top: 32px;
    font-size: clamp(0.8rem, 2vw + 0.3rem, 1.3rem);
    display: flex;
    align-items: center;
    gap: 8px;
    border-top: 1px solid red;

        svg {
            fill: black;
            background: white;
            border-radius: 100%;
        }
`;
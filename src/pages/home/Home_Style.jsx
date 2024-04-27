import styled, { keyframes } from "styled-components";

import { Button, H3 } from '../../components/hello/Hello_Style';

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 3vw, 2.5rem);
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
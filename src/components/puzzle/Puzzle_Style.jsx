import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;
    aspect-ratio: 1;
    margin-inline: auto;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
    background-color: #432929;

    `;
export const Slot = styled.div`
    /* transform: translateX(${props => props.$test}%);
    transition: all 1s linear; */
    border: 1px dashed khaki;
    `;

export const Piece = styled.div`

    background-color: orchid;
    `;
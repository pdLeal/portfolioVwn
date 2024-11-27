import styled from "styled-components";

export const Container = styled.section`
    width: 80vw;
    aspect-ratio: 1;
    margin-inline: auto;
    display: grid;
    grid-template: repeat(${props => props.$layout}, 1fr) / repeat(${props => props.$layout}, 1fr);
    background-color: #432929;

    `;
export const Slot = styled.div`
    border: 1px dashed khaki;
    `;

export const Piece = styled.div`

    background-color: orchid;
    `;
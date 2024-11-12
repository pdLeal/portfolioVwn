import styled from "styled-components";

export const Section = styled.section`
    padding-top: 24px;
    margin-top: 24px;
    border: 1px solid var(--primary-color); // voltar p/ top
`;

export const H2 = styled.h2`
    margin-block: 48px 24px;
`;

export const Ul = styled.ul`
    list-style: none;
    text-align: center;
    padding-block: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 150px));
    grid-auto-rows: minmax(100px, auto);
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    border: solid 1px red;
`;
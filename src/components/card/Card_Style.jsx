import styled from "styled-components";

export const Sub_Grid = styled.div`
    padding: 16px;
    margin-bottom: 32px;
    display: grid;
    grid-row: span 4;
    grid-template-rows: subgrid;

    border: solid 1px var(--primary-color);

        a {
            text-decoration: none;
            color: var(--primary-color);
        }

        a:hover {
            color: red;
        }

        img {
            width: 100%;
        }
`;
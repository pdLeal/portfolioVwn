import styled from "styled-components";
import { Main } from '../home/Home_Style';

export const MainGrid = styled(Main)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(49%, 250px));
    grid-template-rows: min-content auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 1024px) {
            grid-template-columns: none;
        }
`;
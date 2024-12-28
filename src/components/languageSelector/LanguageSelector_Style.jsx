import styled from "styled-components";
import { Button } from "../hello/Hello_Style";


export const Container = styled.div`
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
    background-color: var(--bg-color);
    position: fixed;
    top: 0;
    z-index:1;

        .selected {
                color: var(--redish);
                text-shadow: 0px 0px 4px var(--redish);
                box-shadow:  0px 0px 4px var(--redish);
                border-color: var(--redish);
            }
`;

export const Btn = styled(Button)`
    font-size: clamp(0.5rem, 2vw + 0.3rem, .8rem);    
`;
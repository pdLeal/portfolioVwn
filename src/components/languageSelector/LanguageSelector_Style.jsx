import styled from "styled-components";
import { Button } from "../hello/Hello_Style";


export const Container = styled.div`
    padding: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 0;
    z-index:1;

        .selected {
                color: var(--redish);
                text-shadow: var(--default-shadow) var(--redish);
                box-shadow:  var(--default-shadow) var(--redish);
                border-color: var(--redish);
            }

        @media screen and (max-width: 564px) {
            flex-direction: column;
        }
`;

export const Btn = styled(Button)`
    font-size: clamp(0.5rem, 2vw + 0.3rem, .8rem);    
`;
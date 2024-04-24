import styled from "styled-components";

export const Ul = styled.ul`
    text-align: center;
    padding: 16px;
    max-width: 80vw;
    margin-inline: auto;
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    border-bottom: solid 1px var(--primary-color);
    
        a {
            flex-grow: 1;
            font-size: clamp(1.3rem, 2vw + 0.5rem, 2rem);text-decoration: none;
            color: white;
            transition: all 150ms linear;

            position: relative;
            z-index: 1;
        }

        a:not(:last-child) { // Selects the links that are not the last child
            border-right: solid 1px var(--primary-color);
        }

        a:hover {
            text-shadow: 0px 0px 10px whitesmoke; 
        }
`;
import styled from "styled-components";

export const Container = styled.div`
    font-family: "VT323", monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    position: relative;
`;

export const H1 = styled.h1`
    font-size: clamp(1rem, 3vw + 0.5rem, 2rem);
    color: var(--runaway-color);
    `;

export const Button = styled.button`
    font-size: clamp(0.8rem, 2vw + 0.5rem, 1.8rem);
    color: var(--runaway-color);
    padding: 0.225em 0.8em;
    cursor: pointer;
    border: solid 1px var(--runaway-color);
    border-left: solid 3px;
    border-radius: 5px;
    background-color: transparent;

        &:hover,
        &:focus-visible {
          color: orangered;
          border-color: orangered;
        }
        
        &:active {
          color: #eaff00;
          border-color: #eaff00;
        }
`;

export const Wrapper = styled.div.attrs(props => ({
    style: {
      transform: `translate(calc(${props.$xPosition}vw - 50vw), calc(${props.$yPosition}vh - 50vh))`
    }
  }))`
    width: max-content;
    height: max-content;
    font-size: clamp(0.8rem, 2vw + 0.5rem, 1.8rem);
    border: solid 1.5em transparent;
    transition: transform 150ms ease-out;

    position: absolute;
  `;
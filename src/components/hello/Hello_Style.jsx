import styled from "styled-components";

export const Container = styled.div`
    font-family: "VT323", monospace;
    text-align: center;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 96px;
    height: 100vh;
    
    position: relative;
    `;

export const H1 = styled.h1`
    font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
    color: var(--runaway-color);
    text-shadow: 0px 0px 3px var(--runaway-color);
    `;

export const Wrapper = styled.div.attrs(props => ({
  style: {
    transform: `translate(calc(${props.$xPosition}vw - 50vw), calc(${props.$yPosition}vh - 50vh))`
  }
}))`
    width: max-content;
    height: max-content;
    font-size: clamp(1.3rem, 2.5vw + 0.5rem, 2.3rem);
    border: solid 1.5em transparent;
    transition: transform 150ms ease-out;
    
    position: absolute;
    `;

export const Button = styled.button`
    font-size: clamp(0.8rem, 2vw + 0.5rem, 1.8rem);
    color: var(--runaway-color);
    text-shadow: 0px 0px 4px var(--runaway-color);
    box-shadow:  0px 0px 4px var(--runaway-color);
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

export const HelpBtn = styled(Button)`
  position: fixed;
  top: 65%;
`;

export const SkipBtn = styled(Button)`
  font-size: clamp(0.5rem, 1vw + 0.5rem, 1rem);
  border: none;
  box-shadow: none;

  position: fixed;
  top: 5%;
  right: 5%;
`;
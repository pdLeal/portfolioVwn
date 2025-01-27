import styled from "styled-components";

export const Container = styled.div`
    font-family: var(--an0xia-font);
    text-align: center;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    row-gap: 96px;
    height: 100vh;
    user-select: none;
    
    position: relative;
    `;

export const H3 = styled.h3`
    font-size: clamp(1.5rem, 3vw + 0.5rem, 2.5rem);
    color: var(--primary-color);
    text-shadow: 0px 0px 13px var(--primary-color);
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
    color: var(--primary-color);
    text-shadow: var(--default-shadow) var(--primary-color);
    box-shadow:  var(--default-shadow) var(--primary-color);
    padding: 0.225em 0.8em;
    cursor: pointer;
    border: solid 1px var(--primary-color);
    border-left: solid 3px;
    border-radius: 5px;
    background-color: transparent;
    
        &:hover,
        &:focus-visible {
          color: var(--hover-color);
          border-color: var(--hover-color);
        }
        
        &:active {
          color: var(--active-color);
          border-color: var(--active-color);
        }
`;

export const WeakBtn = styled(Button)`
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
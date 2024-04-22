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
    `;

export const Button = styled.button`
    font-size: clamp(0.8rem, 2vw + 0.5rem, 1.8rem);
    padding: 0.225em 0.8em;
    cursor: pointer;
    border: none;
    border-radius: 5px;

        &:hover {
            background-color: orangered;
            color: white;
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
    border: solid 0.8em transparent;
    transition: transform 150ms ease-out;

    position: absolute;
  `;
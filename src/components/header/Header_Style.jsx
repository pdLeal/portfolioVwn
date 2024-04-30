import styled, { keyframes } from "styled-components";

export const Ul = styled.ul`
    text-align: center;
    padding: 16px;
    max-width: 80vw;
    margin-inline: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    list-style: none;
    border-bottom: solid 1px var(--primary-color);
`;

const glitchEffect = keyframes`
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
      -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
      0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
      -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
      0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
      -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
      -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
`;

export const Li = styled.li`
    padding: 4px;

        &:not(:last-child) { // Selects the li that are not the last child
            border-right: solid 1px var(--primary-color);
        }

        a {
            font-size: clamp(1.3rem, 2vw + 0.5rem, 2rem);text-decoration: none;
            color: white;
            transition: all 150ms linear;
        }

        a:hover {
            text-shadow: 0px 0px 10px whitesmoke; 
        }

        a.glitch {
            font-family: "VT323", monospace;
            text-transform: uppercase;
            text-shadow:
                0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
                0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
            animation: ${glitchEffect} 750ms infinite;
            position: relative;
        }

        .glitch span {
            position: absolute;
            top: 0;
            left: 0;
        }

        .glitch span:first-child {
            animation: glitch 650ms infinite;
            clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
            transform: translate(-0.05em, -0.025em);
            opacity: 0.8;
        }

        .glitch span:last-child {
            animation: glitch 375ms infinite;
            clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
            transform: translate(0.05em, 0.025em);
            opacity: 0.8;
        }
`;

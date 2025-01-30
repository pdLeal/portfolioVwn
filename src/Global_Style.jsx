import { createGlobalStyle } from "styled-components";

const Global_Style = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: "Ubuntu Mono", monospace;
        color: white;
        background-color: var(--bg-color);
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    img {
        max-width: 100%;
        vertical-align: middle;
        font-style: italic;
    }

    button {
        font-family: inherit;
    }

    :root {
        --an0xia-font: "VT323", monospace;
        --bg-color: #000;
        --primary-color: ${({isWeak}) => !isWeak ? "#0ded0d" : "#6df7f7"};
        --redish: red;
        --blueish: blue;
        --hover-color: ${({isWeak}) => !isWeak ? "#b4f7b4" : "#f4fcc4"};
        --active-color: ${({isWeak}) => !isWeak ? "#2b6a2b" : "#1a6c6c"};
        --typeSpeed: 5s;
        --delay: 1s;
        --default-shadow: 0px 0px 4px;
    }
`;

export default Global_Style;

import { createGlobalStyle } from "styled-components";

const Global_Style = createGlobalStyle`
    html {
        box-sizing: border-box;
        color: white;
        background-color: var(--bg-color);
        backdrop-filter: blur(10px);
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
        --bg-color: #0c0101;
        --primary-color: #0ded0d;
        --typeSpeed: 5s;
        --delay: 1s;
    }
`;

export default Global_Style;

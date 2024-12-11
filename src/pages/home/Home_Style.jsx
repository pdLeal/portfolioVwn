import styled from "styled-components";
import { Tease } from "../denied/Denied_Style.jsx";
import { Button } from "../../components/hello/Hello_Style.jsx";

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 2vw + 0.5rem, 2.5rem);
    `;

export const About_Section = styled.section`
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 40% 1fr;
    gap: 16px;

        @media screen and (max-width: 560px) {
            grid-template-columns: 1fr;
            grid-template-rows: auto 250px;
        }
`;

export const Span = styled.span`
    text-decoration: line-through 0.15em var(--primary-color);
`;

export const Projects = styled.section`
    margin-top: 24px;

        a {
            text-align: center;
            text-decoration: none;
            font-size: clamp(0.8rem, 2vw + 0.5rem, 1.8rem);
            color: var(--primary-color);
            text-shadow: 0px 0px 4px var(--primary-color);
            box-shadow:  0px 0px 4px var(--primary-color);
            padding: 0.225em 0.8em;
            cursor: pointer;
            border: solid 1px var(--primary-color);
            border-left: solid 3px;
            border-radius: 5px;
            background-color: transparent;
            
                &:hover,
                &:focus-visible {
                color: #66f666;
                border-color: #66f666;
                }
                
                &:active {
                color: #2b6a2b;
                border-color: #2b6a2b;
                }
            }
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 4vw + 0.5rem, 2.5rem);
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
    position: relative;
    overflow: hidden;

        @media screen and (max-width: 1080px) {
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                }

`;

export const Rules = styled.div`
    font-family: "VT323", monospace;
    padding-block: 8px;
    display: grid;
    grid-template-areas:
                        'rules rules'
                        'btn1 btn2'
                        'btn3 .';
    justify-content: center;
    align-items: center;
    gap: 16px 8px;

        >:nth-child(2) {
            grid-area: btn1;
        }
        >:nth-child(3) {
            grid-area: btn2;
        }
        >:nth-child(4) {
            grid-area: btn3;
        }

        @media screen and (max-width: 1080px) {
            grid-template-areas:
                        'rules rules'
                        'btn1 btn1'
                        'btn2 btn2'
                        'btn3 btn3';
            }
`;

export const TextRules = styled(Tease)`
    font-size: clamp(1rem, 3vw + 0.5rem, 1.8rem);
    grid-area: rules;
`;

export const Btn = styled(Button)`
    color: ${props => props.$hardModeIsOn ? 'red' : 'var(--primary-color)'};
    text-shadow: 0px 0px 4px ${props => props.$hardModeIsOn ? 'red' : 'var(--primary-color)'};
    box-shadow:  0px 0px 4px ${props => props.$hardModeIsOn ? 'red' : 'var(--primary-color)'};
    border: solid 1px ${props => props.$hardModeIsOn ? 'red' : 'var(--primary-color)'};
    
        &:hover,
        &:focus-visible {
        color:#5cff9b;
        border-color: #5cff9b;
        }
        
        &:active {
        color: #2b6a2b;
        border-color: #2b6a2b;
        }
`;
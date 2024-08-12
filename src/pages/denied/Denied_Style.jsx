import styled from "styled-components";
import { Video } from '../../components/questionBox/QBox_Style';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    /* position: relative; */

    display: grid;
    grid-template-columns: repeat(${props => props.$numOfColumns}, minmax(150px, 400px));
    grid-template-rows: repeat(${props => props.$numOfRows}, minmax(150px, 400px));
`;

export const OuterBox = styled.div`
    --color: ${props => props.$color};

    text-transform: uppercase;
    border: solid 10px transparent;
    border-top: none;
    outline: solid 1px var(--color);
    box-shadow: 0px 0px 16px -3px var(--color);
    /* position: relative; */
    display: flex;
    flex-direction: column;

    
    scale: ${props => props.$scale};
    grid-column: ${props => props.$areaColumn};
    grid-row: ${props => props.$areaRow};
    
    transition: scale 350ms cubic-bezier(0.47, 0, 0.75, 0.72);
    
        .flex {
            display: flex;
            justify-content: center;
            align-items: center
        }

        p.error {
            padding-block: 8px;
            justify-content: space-between;
            backdrop-filter: blur(0.05rem);
        }


        span {
            width: 1.25em;
            aspect-ratio: 1;
            background: radial-gradient(circle, #fd3232, #b01616, #800000);
            border: solid white 0.01em;
        }
    `;

export const InnerBox = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 3fr 1fr;
    align-items: center;
    border-top: dashed 1px var(--color);

        div.evly {
            justify-content: space-evenly;
        }

        .okBg {
            width: 100%;
            height: 100%;
            justify-content: flex-end;
            background-color: transparent;
            backdrop-filter: blur(0.05rem);
            border-top: dashed 1px var(--color);
        }

        .ok {
            width: 35%;
            height:60%;
            margin-right: 18px;
            background-color: transparent;
            border: inset 1px var(--color);
        }
`;

export const HackVideo = styled(Video)`
    position: absolute;
    top: 4px;
`;

export const HackImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -99;
    position: absolute;
    top: 4px;
`;
import styled from "styled-components";
import { Main } from '../home/Home_Style';

export const AboutMain = styled(Main)`

    & > :first-child {
        margin-bottom: 32px;
    }
     // SWIPER TESTS
     .swiper {
        width: 240px;
        height: 320px;
    }

    .swiper-slide {
        display: flex;
        align-items: start;
        justify-content: center;
        border-radius: 10px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        background-color: #000000;
    }
`;

export const Section = styled.section`
    padding-top: 24px;
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    border-top: 1px solid var(--primary-color);
    background-color: #fa80721f;
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
`;

export const OuterBg = styled.div`
    width: 100%;
    height: 90%;
    padding: 5px;
    border-radius: 5px;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    position: relative;
    background-image: url("/bgGamesCard.jpg");
    // Image from Thomas Bormans https://unsplash.com/pt-br/@thomasbormans
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const InnerBg = styled.div`
    display: grid;
    grid-template-rows: auto 4fr auto 4fr;
    position: absolute;
    inset: 10px 5% -10px 5%;
    
    background-color: #520293;

        h3 {
            padding-left: 8px;
            display: flex;
            align-items: center;
            background: linear-gradient(190deg, #444444, #222);
            border: 1px solid #000000; 
            border-radius: 3% 3% 3% 3% / 39% 39% 38% 39%; 
            box-shadow:
                0 0 0px 2px rgb(255 255 255 / 80%), 
                0 0 10px rgba(0, 0, 0, 0.8), 
                inset 0 -3px 0 0px rgb(0 0 0 / 20%);
                z-index: 1;
        }

        svg {
            justify-self: center;
            align-self: center;
            height: 100%;
            width: 100%;
            background-color: aqua;
        }

        .type {
            padding-left: 8px;
            padding-block: 0.1em;
            display: flex;
            align-items: center;
            background: linear-gradient(190deg, #444444, #222);
            border: 1px solid #000000; 
            border-radius: 3% 3% 3% 3% / 39% 39% 38% 39%; 
            box-shadow:
                0 0 0px 2px rgb(255 255 255 / 80%), 
                0 0 10px rgba(0, 0, 0, 0.8), 
                inset 0 -3px 0 0px rgb(0 0 0 / 20%);
                z-index: 1;
        }

    p {
        font-size: 1rem;
    }
    `;
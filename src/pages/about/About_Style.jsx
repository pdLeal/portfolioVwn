import styled from "styled-components";
import { Main } from '../home/Home_Style';

export const AboutMain = styled(Main)`

    & > :first-child {
        margin-bottom: 32px;
    }
     // SWIPER TESTS
     .swiper {
        width: 260px;
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
    height: 85%;
    padding: 5px;
    border-radius: 5px;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    border: 10px solid black;
    position: relative;
    background-image: url("/bgGamesCard.png");
    // Image from Thomas Bormans https://unsplash.com/pt-br/@thomasbormans
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;

export const InnerBg = styled.div`
    display: grid;
    grid-template-rows: auto 4fr auto 4fr;
    position: absolute;
    inset: 10px 5% -15px 5%;
    
    border: 1px solid #000000; 
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    box-shadow:
                0 0 0px 2px rgb(255 255 255 / 80%), 
                0 0 10px rgba(0, 0, 0, 0.8), 
                inset 0 -3px 0 0px rgb(0 0 0 / 20%);
    background-color: black;
        
        .titles {
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
            z-index: 9;
        }

        h3 {
            font-size: clamp(1.3rem, 2vw + 0.5rem, 2rem);
        }

        svg {
            height: 100%;
            width: 100%;
            justify-self: center;
            align-self: center;
            background-color: black;
        }


        p {
            font-size: 1rem;
        }

        .description {
            padding: 4px;
        }
    `;
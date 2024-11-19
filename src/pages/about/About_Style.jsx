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
        padding: 10px;
        display: flex;
        align-items: start;
        justify-content: center;
        border-radius: 10px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
        background-color: #2c2c2c;
    }

    /* .swiper-slide:nth-child(1n) {
        background-color: rgb(206, 17, 17);
    } */

    /* .swiper-slide:nth-child(2n) {
        background-color: rgb(0, 140, 255);
     }

    .swiper-slide:nth-child(3n) {
        background-color: rgb(10, 184, 111);
    }

    .swiper-slide:nth-child(4n) {
        background-color: rgb(211, 122, 7);
    }

    .swiper-slide:nth-child(5n) {
        background-color: rgb(118, 163, 12);
    }

    .swiper-slide:nth-child(6n) {
        background-color: rgb(180, 10, 47);
    }

    .swiper-slide:nth-child(7n) {
        background-color: rgb(35, 99, 19);
    }

    .swiper-slide:nth-child(8n) {
        background-color: rgb(0, 68, 255);
    }

    .swiper-slide:nth-child(9n) {
        background-color: rgb(218, 12, 218);
    } */
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
    background-color: #679302;
    position: relative;
`;

export const InnerBg = styled.div`
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 3fr;
    position: absolute;
    inset: 10px 5% -10px 5%;
    
    background-color: #520293;
    p {
        font-size: 1rem;
    }
    `;
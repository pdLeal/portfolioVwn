import styled from "styled-components";

export const Main = styled.main`
    margin-top: 24px;
    margin-inline: auto;
    max-width: 80vw;
    font-size: clamp(1.2rem, 2vw + 0.5rem, 2.5rem);

    // SWIPER TESTS
    .swiper {
        width: 240px;
        height: 320px;
    }

    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 18px;
        font-size: 22px;
        font-weight: bold;
        color: #fff;
    }

    .swiper-slide:nth-child(1n) {
        background-color: rgb(206, 17, 17);
    }

    .swiper-slide:nth-child(2n) {
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
    }

    .swiper-slide:nth-child(10n) {
        background-color: rgb(54, 94, 77);
    }
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
    text-align: center;
    margin-top: 48px;
    padding-block: 24px;
`;

export const H2 = styled.h2`
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 4vw + 0.5rem, 2.5rem);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(40%, 250px));
    grid-template-rows: min-content auto auto auto auto;
    justify-content: space-between;
    align-items: center;
    gap: 16px;

    @media screen and (max-width: 644px) {
        justify-content:center;
        }
`;
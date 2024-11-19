import React from 'react';
import Header from '../../components/header/Header';
import * as S from './About_Style';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiSass, SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import Dropdown from '../../components/dropdown/Dropdown';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

function About() {
  return (
    <>
      <Header />
      <S.AboutMain>
        <p>Congratulations on getting here! I know it's counterintuitive to hide this kind of info behind some silly mini-game, but I wanted this portfolio to be more than just another pile of information about some random developer. I wanted to have fun creating this project, and I hope you're having just as much fun discovering the answers and putting the pieces together! And also, I just freaking love video games!</p>
        <Dropdown />
        <S.Section>
          <S.H2>My "games" so far...</S.H2>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>HTML</h3>
                  <SiHtml5 color="#E34F26" size={32} />
                  <p className='type'>Markup Language</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>CSS</h3>
                  <SiCss3 color="#1572B6" size={32} />
                  <p className='type'>Style Sheet Language</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>JavaScript</h3>
                  <SiJavascript color="#F7DF1E" size={32} />
                  <p className='type'>Programming Language</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>React</h3>
                  <SiReact color="#61DAFB" size={32} />
                  <p className='type'>Library</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>Styled-Components</h3>
                  <SiStyledcomponents color="#DB7093" size={32} />
                  <p className='type'>Library</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>Next.js</h3>
                  <SiNextdotjs color="#ffffff" size={32} />
                  <p className='type'>Framework</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>Tailwind</h3>
                  <SiTailwindcss color="#38B2AC" size={32} />
                  <p className='type'>Library</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
            <SwiperSlide>
              <S.OuterBg>
                <S.InnerBg>
                  <h3>Git</h3>
                  <SiGit color="#F05032" size={32} />
                  <p className='type'>Version Control</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, rem odio ullam iusto quis inventore harum cum beatae aperiam pariatur!</p>
                </S.InnerBg>
              </S.OuterBg>
            </SwiperSlide>
          </Swiper>
        </S.Section>
      </S.AboutMain>
    </>
  )
}

export default About
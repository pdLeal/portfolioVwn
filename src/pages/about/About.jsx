import React, { useState } from 'react';
import Header from '../../components/header/Header';
import * as S from './About_Style';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import Dropdown from '../../components/dropdown/Dropdown';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

function About() {
  const [mouseX, setMouseX] = useState(null);
  const [mouseY, setMouseY] = useState(null);


  function test(e) {

    let x = e.pageX - e.currentTarget.offsetLeft;
    let y = e.pageY - e.currentTarget.offsetTop;

    setMouseX(x);
    setMouseY(y);
  }

  return (
    <>
      <Header />
      <S.AboutMain>
        <p className='description'>Congratulations on getting here! I know it's counterintuitive to hide this kind of info behind some silly mini-game, but I wanted this portfolio to be more than just another pile of information about some random developer. I wanted to have fun creating this project, and I hope you're having just as much fun discovering the answers and putting the pieces together! And also, I just freaking love video games!</p>
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
              <S.Container onClick={e => {
                test(e)
              }} $mouseX={mouseX} $mouseY={mouseY}>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>HTML</h3>
                    <SiHtml5 color="#E34F26" size={32} />
                    <p className='titles'>Markup Language</p>
                    <p className='description'>Used to structure content on the web, defining elements like text, images, and links for display in browsers.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>CSS</h3>
                    <SiCss3 color="#1572B6" size={32} />
                    <p className='titles'>Style Sheet Language</p>
                    <p className='description'>Used to style and design web pages, controlling elements' layout, colors, fonts, and more.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>JavaScript</h3>
                    <SiJavascript color="#F7DF1E" size={32} />
                    <p className='titles'>Programming Language</p>
                    <p className='description'>Used to create interactive and dynamic content on websites, such as animations, forms, real-time updates, and much more.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>React</h3>
                    <SiReact color="#61DAFB" size={32} />
                    <p className='titles'>Library</p>
                    <p className='description'>Used for building user interfaces, allowing developers to create reusable UI components and manage the state of web applications efficiently.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>Styled-Components</h3>
                    <SiStyledcomponents color="#DB7093" size={32} />
                    <p className='titles'>Library</p>
                    <p className='description'>Allows developers to write CSS directly within JavaScript. It enables the creation of dynamic and scoped styles, making it easy to manage and maintain complex user interfaces.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>Next.js</h3>
                    <SiNextdotjs color="#ffffff" size={32} />
                    <p className='titles'>Framework</p>
                    <p className='description'>React-based framework for building server-side rendered (SSR) and static web applications. It's ideal for building fast and scalable websites.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>Tailwind</h3>
                    <SiTailwindcss color="#38B2AC" size={32} />
                    <p className='titles'>Library</p>
                    <p className='description'>CSS framework that provides pre-defined classes for designing custom, responsive layouts. Promotes a more efficient and consistent design process.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>Git</h3>
                    <SiGit color="#F05032" size={32} />
                    <p className='titles'>Version Control System</p>
                    <p className='description'>Tracks changes in code, enabling developers to work on different branches, merge updates, and revert to previous versions, ensuring code integrity and teamwork.</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

          </Swiper>
        </S.Section>
      </S.AboutMain>
    </>
  )
}

export default About
import React from 'react';
import Header from '../../components/header/Header';
import * as S from './About_Style';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiNextdotjs, SiTailwindcss, SiGit, SiLinkedin, SiGithub } from "react-icons/si";
import Dropdown from '../../components/dropdown/Dropdown';
import Footer from '../../components/footer/Footer';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

function About() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <S.AboutMain>
        <p className='description'>{t("aboutDescription")}</p>
        <Dropdown />
        <S.Section>
          <S.H2>{t("myGames")}</S.H2>
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <S.Container>
                <S.OuterBg>
                  <S.InnerBg>
                    <h3 className='titles'>HTML</h3>
                    <SiHtml5 color="#E34F26" size={32} />
                    <p className='titles'>{t("htmlype")}</p>
                    <p className='description'>{t("htmlDesc")}</p>
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
                    <p className='titles'>{t("cssType")}</p>
                    <p className='description'>{t("cssDesc")}</p>
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
                    <p className='titles'>{t("jsType")}</p>
                    <p className='description'>{t("jsDesc")}</p>
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
                    <p className='titles'>{t("reactType")}</p>
                    <p className='description'>{t("reactDesc")}</p>
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
                    <p className='titles'>{t("styledType")}</p>
                    <p className='description'>{t("styledDesc")}</p>
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
                    <p className='description'>{t("nextDesc")}</p>
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
                    <p className='titles'>Framework</p>
                    <p className='description'>{t("tailDesc")}</p>
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
                    <p className='titles'>{t("gitType")}</p>
                    <p className='description'>{t("gitDesc")}</p>
                  </S.InnerBg>
                </S.OuterBg>
              </S.Container>
            </SwiperSlide>

          </Swiper>
        </S.Section>
        <S.ContactWrapper>
          <a href='https://www.linkedin.com/in/pdleal/' target='_blank'><SiLinkedin /></a>
          <a href='https://github.com/pdLeal' target='_blank'><SiGithub /></a>
          <p>{t("invitation")}</p>
        </S.ContactWrapper>
      </S.AboutMain>
      <Footer />
    </>
  )
}

export default About
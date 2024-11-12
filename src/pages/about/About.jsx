import React from 'react';
import Header from '../../components/header/Header';
import { Main } from '../home/Home_Style';
import Me from '../../assets/perfil.jpeg';
import * as S from './About_Style';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiStyledcomponents, SiSass, SiNextdotjs, SiTailwindcss, SiGit } from "react-icons/si";
import Dropdown from '../../components/dropdown/Dropdown';

function About() {
  return (
    <>
      <Header />
      <Main>
        <p>Congratulations on getting here! I know it's counterintuitive to hide this kind of info behind some silly mini-game, but I wanted this portfolio to be more than just another pile of information about some random developer. I wanted to have fun creating this project, and I hope you're having just as much fun discovering the answers and putting the pieces together! And also, I just freaking love video games!</p>
        <S.Section>
          <Dropdown />
            <S.H2>My "games" so far...</S.H2>
            <S.Ul>
              <li>
                <figure>
                  <SiHtml5 color="#E34F26" size={32} />
                  <figcaption>HTML</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiCss3 color="#1572B6" size={32} />
                  <figcaption>CSS</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiJavascript color="#F7DF1E" size={32} />
                  <figcaption>JavaScript</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiReact color="#61DAFB" size={32} />
                  <figcaption>React</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiStyledcomponents color="#DB7093" size={32} />
                  <figcaption>Styled-Components</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiSass color="#CC6699" size={32} />
                  <figcaption>SASS</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiNextdotjs color="#ffffff" size={32} />
                  <figcaption>Next.js</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiTailwindcss color="#38B2AC" size={32} />
                  <figcaption>Tailwind</figcaption>
                </figure>
              </li>
              <li>
                <figure>
                  <SiGit color="#F05032" size={32} />
                  <figcaption>Git</figcaption>
                </figure>
              </li>
            </S.Ul>
        </S.Section>

      </Main>
    </>
  )
}

export default About
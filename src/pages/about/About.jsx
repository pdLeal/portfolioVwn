import React from 'react';
import Header from '../../components/header/Header';
import { Main } from '../home/Home_Style';
import Me from '../../assets/perfil.jpeg';
import * as S from './About_Style';

function About() {
  return (
    <>
      <Header />
      <Main>
        <S.Perfil src={Me} alt="" />
      </Main>
    </>
  )
}

export default About
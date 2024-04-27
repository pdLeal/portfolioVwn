import React from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';

function Home() {
  
  return (
    <>
      <Header />
      <S.Main>
        <p>Hello! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
        <QBox />
      </S.Main>
    </>
  )
}

export default Home
import React from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Card from '../../components/card/Card';

function Home() {

  return (
    <>
      <Header />
      <S.Main>
        <S.About>
          <p>Hello! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
          <QBox />
        </S.About>
        <S.Projects>
          <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          <S.Grid>
            <Card />
            <Card />
            <Card />
            <Card />
          </S.Grid>
        </S.Projects>
      </S.Main>
    </>
  )
}

export default Home
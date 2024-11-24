import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Card from '../../components/card/Card';
import data from '../../data/Projetos.json';
import Footer from '../../components/footer/Footer'


function Home() {

  return (
    <>
      <Header />
      <S.Main>
        <S.About_Section>
          <p>Hello! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
          <QBox />
        </S.About_Section>
        <S.Projects>
          <S.H2>Some Projects</S.H2>
          <S.Grid>
            {
              data.map(project => {
                return <Card
                        keyId={project.id}
                        title={project.title}
                        gitUrl={project.gitUrl}
                        pageUrl={project.pageUrl}
                        img={project.img}
                        alt={project.alt}
                        text={project.text} />
              })
            }
          </S.Grid>
        </S.Projects>
      </S.Main>
      <Footer />
    </>
  )
}

export default Home
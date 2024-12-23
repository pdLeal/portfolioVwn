import React from 'react';
import Header from '../../components/header/Header';
import data from '../../data/Projetos.json';
import Card from '../../components/card/Card';
import * as S from './Projects_Style';
import Footer from '../../components/footer/Footer';

function Projects() {
  return (
    <>
      <Header />
      <S.MainGrid>
        {
          data.map(project => {
            return <Card
                      title={project.title}
                      gitUrl={project.gitUrl}
                      pageUrl={project.pageUrl}
                      img={project.img}
                      alt={project.alt}
                      text={project.text}
                      key={project.id}/>
          })
        }
      </S.MainGrid>
      <Footer />
    </>
  )
}

export default Projects
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Card from '../../components/card/Card';
import data from '../../data/Projetos.json';
import Puzzle from '../../components/puzzle/Puzzle';
import Footer from '../../components/footer/Footer'
import TypeEfct from '../../components/TypeEfct';
import { Button } from '../../components/hello/Hello_Style';


function Home() {
  const [showRules, setShowRules] = useState(false);

  return (
    <>
      <Header />
      <S.Main>
        <S.About_Section>
          <p>Hello! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
          <QBox />
        </S.About_Section>
        <S.Projects>
          <S.H2>Projects Puzzle</S.H2>
          {!showRules && <button onClick={() => setShowRules(true)}>Rules</button>}

          <S.Wrapper>

            {showRules &&
              <S.TextRules>
                <TypeEfct text={['', 'A simple puzzle for simple projects...', "Just put the pieces together 'till the image makes sense!"]} />
              </S.TextRules>
            }

            {showRules &&
              <S.Modds>
                <button>Hard Mode</button>
                <button>Restart</button>
              </S.Modds>
            }

          </S.Wrapper>

          <Puzzle />



          {/* <S.Grid>
            {
              data.map(project => {
                return <Card
                        key={project.id}
                        title={project.title}
                        gitUrl={project.gitUrl}
                        pageUrl={project.pageUrl}
                        img={project.img}
                        alt={project.alt}
                        text={project.text} />
              })
            }
          </S.Grid> */}
        </S.Projects>
      </S.Main>
      <Footer />
    </>
  )
}

export default Home
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Puzzle from '../../components/puzzle/Puzzle';
import Footer from '../../components/footer/Footer';
import { PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import LanguageSelector from '../../components/languageSelector/LanguageSelector';


function Home() {
  const [hardModeIsOn, setHardModeIsOn] = useState(false);
  const [reloadPuzzle, setReloadPuzzle] = useState(true); // true/false doens't mattter, just needs to change to remount the whole comp
  const [projectUrl, setProjectUrl] = useState('');
  const [savedPiecesPosition, setSavedPiecesPosition] = useState([]);
  const { projectWinner, setProjectWinner } = useWinnerContext();



  function handleRestart() {
    setReloadPuzzle(!reloadPuzzle);

    setProjectWinner(false);
    setSavedPiecesPosition([]);
    localStorage.removeItem('piecesPosition');
    localStorage.removeItem('canMove');
  }

  function handleHardMode() {
    handleRestart();
    setHardModeIsOn(!hardModeIsOn);
    if (!localStorage.getItem('hardModeIsOn')) {
      localStorage.setItem('hardModeIsOn', true)
    } else {
      localStorage.removeItem('hardModeIsOn')
    }
  }

  useEffect(() => {
    if (localStorage.getItem('hardModeIsOn')) {
      setHardModeIsOn(true)
    }
  }, [])

  return (
    <>
      <LanguageSelector />
      <Header />
      <S.Main>
        <S.About_Section>
          <p>Hello! I'm Pedro and for the last year I've been studying so I can become a front-end developer. I have to admit that my own designs leave a LOT to disere, but I'm certain I can code <S.Span>almost</S.Span> anything you can came up with!</p>
          <QBox />
        </S.About_Section>
        <S.Projects>
          <S.H2>Projects Puzzle</S.H2>
          <PuzzleProvider value={{ projectUrl, setProjectUrl, savedPiecesPosition, setSavedPiecesPosition }}>
            <S.Wrapper>
              <S.Rules>
                {!projectWinner ? <S.TextRules>A simple puzzle for simple projects. Just put the pieces together 'till the image makes sense!</S.TextRules>
                              : hardModeIsOn ? <S.TextRules>Oh, you are real good at this,aren't you?</S.TextRules>
                                            : <S.TextRules>Congratulations! You can move on and see all the projects you want. Also, how about trying the hard difficulty? Show them how good you really are!</S.TextRules>}

                <S.Btn $hardModeIsOn={hardModeIsOn} onClick={handleHardMode}>Hard Mode</S.Btn>
                <S.Btn onClick={handleRestart}>Restart</S.Btn>
                <a href={projectUrl} target='_blank'>Peek Answer</a>
              </S.Rules>

              <Puzzle
                isHardOn={hardModeIsOn}
                key={reloadPuzzle}
              />
            </S.Wrapper>
          </PuzzleProvider>
        </S.Projects>
      </S.Main>
      <Footer />
    </>
  )
}

export default Home
import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import * as S from './Home_Style';
import QBox from '../../components/questionBox/QBox';
import Puzzle from '../../components/puzzle/Puzzle';
import Footer from '../../components/footer/Footer';
import { PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import { useTranslation } from 'react-i18next';


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

  // I18NEXT
  const {t} = useTranslation();

  return (
    <>
      <Header />
      <S.Main>
        <S.About_Section>
          <p>{t("homeAbout")}</p>
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
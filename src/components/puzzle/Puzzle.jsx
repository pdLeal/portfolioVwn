import React, { useEffect, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import * as S from './Puzzle_Style';
import{ PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import { useTranslation } from 'react-i18next';

function Puzzle() {
  // context

  const [savedPiecesPosition, setSavedPiecesPosition] = useState([]);
  const [projectUrl, setProjectUrl] = useState('');
  const [hardModeIsOn, setHardModeIsOn] = useState(false);
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'

  // end context

  const [reloadPuzzleBoard, setReloadPuzzleBoard] = useState(true); // true/false doens't mattter, just needs to change to remount the whole comp

  const { projectWinner, setProjectWinner } = useWinnerContext();



  function handleRestart() {
    setReloadPuzzleBoard(!reloadPuzzleBoard);

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

  const { t } = useTranslation();
  const { instruction, hardCongrats, congrats } = t("puzzleDescription")

  return (
    <PuzzleProvider value={{ savedPiecesPosition, setSavedPiecesPosition, canMove, setCanMove, setProjectUrl, hardModeIsOn }}>
      <S.Wrapper>
        <S.Rules>
          {!projectWinner ? <S.TextRules>{instruction}</S.TextRules>
            : hardModeIsOn ? <S.TextRules>{hardCongrats}</S.TextRules>
              : <S.TextRules>{congrats}</S.TextRules>}

          <S.Btn $hardModeIsOn={hardModeIsOn} onClick={handleHardMode}>{t("hardBtn")}</S.Btn>
          <S.Btn onClick={handleRestart}>{t("restartBtn")}</S.Btn>
          <a href={projectUrl} target='_blank'>{t("peekBtn")}</a>
        </S.Rules>

        <PuzzleBoard key={reloadPuzzleBoard} />
      </S.Wrapper>
    </PuzzleProvider>
  )
}


export default Puzzle
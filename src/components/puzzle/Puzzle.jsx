import React, { useEffect, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import * as S from './Puzzle_Style';
import{ PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import { useTranslation } from 'react-i18next';
import useHardMode from '../../hooks/puzzle/useHardMode';

function Puzzle() {
  const [savedPiecesPosition, setSavedPiecesPosition] = useState([]);
  const [projectUrl, setProjectUrl] = useState('');
  const { projectWinner, setProjectWinner } = useWinnerContext();

  const { hardModeIsOn, handleHardMode } = useHardMode();

  const [reloadPuzzleBoard, setReloadPuzzleBoard] = useState(true); // true/false doens't mattter, just needs to change to remount the whole comp

  function handleRestart() {
      setReloadPuzzleBoard(!reloadPuzzleBoard);
  
      localStorage.removeItem('piecesPosition');
      localStorage.removeItem('canMove');
      setProjectWinner(false);
      setSavedPiecesPosition([]);
      
      // For some reason that I cannot comprehend, putting handleRestar as a custom hook/own file causes the shuffler to go bananas, preventing the user to win unless he/she reloads the entire page. Future me, please try to understand this when you have more knowlodge!
  }

  // I18NEXT
  const { t } = useTranslation();
  const { instruction, hardCongrats, congrats } = t("puzzleDescription")

  return (
    <PuzzleProvider value={{ savedPiecesPosition, setSavedPiecesPosition, setProjectUrl, hardModeIsOn }}>
      <S.Wrapper>
        <S.Rules>
          {!projectWinner ? <S.TextRules>{instruction}</S.TextRules>
            : hardModeIsOn ? <S.TextRules>{hardCongrats}</S.TextRules>
              : <S.TextRules>{congrats}</S.TextRules>}

          <S.Btn $hardModeIsOn={hardModeIsOn} onClick={() => handleHardMode(handleRestart)}>{t("hardBtn")}</S.Btn>
          <S.Btn onClick={handleRestart}>{t("restartBtn")}</S.Btn>
          <a href={projectUrl} target='_blank'>{t("peekBtn")}</a>
        </S.Rules>

        <PuzzleBoard key={reloadPuzzleBoard} />
      </S.Wrapper>
    </PuzzleProvider>
  )
}


export default Puzzle
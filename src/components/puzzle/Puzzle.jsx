import React, { useEffect, useState } from 'react';
import PuzzleBoard from './PuzzleBoard';
import * as S from './Puzzle_Style';
import{ PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import { useTranslation } from 'react-i18next';
import useRestart from '../../hooks/puzzle/useRestart';
import useHardMode from '../../hooks/puzzle/useHardMode';

function Puzzle() {
  const [savedPiecesPosition, setSavedPiecesPosition] = useState([]);
  const [projectUrl, setProjectUrl] = useState('');
  const { projectWinner } = useWinnerContext();


  const { reloadPuzzleBoard, handleRestart } = useRestart();
  const { hardModeIsOn, handleHardMode } = useHardMode();

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
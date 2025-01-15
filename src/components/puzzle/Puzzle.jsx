import React, { useEffect, useRef, useState } from 'react'
import * as S from './Puzzle_Style';
import { moveToEmpty, checkCanMove, savePosition, handleErrors, checkIfWon } from './helpers';
import useBoardShuffler from '../../hooks/puzzle/useBoardShuffler';
import checkCooldown from '../../utils/checkCooldown';
import usePuzzleContext, { PuzzleProvider } from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';

import { Fireworks } from '@fireworks-js/react'
import { useTranslation } from 'react-i18next';

function PuzzleBoard() {
  const { projectWinner, setProjectWinner } = useWinnerContext();
  
  const { savedPiecesPosition, setSavedPiecesPosition, canMove, setCanMove, hardModeIsOn } = usePuzzleContext();
  // fim dos contextos

  const{ slots, shuffledPieces, pieceImg } = useBoardShuffler();
  const [lastClick, setLastClick] = useState(0);

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) { // Most of the time prevents a bug where all the pieces are the same
      setIsMounted(true);
      return;
    }

    localStorage.setItem('piecesPosition', JSON.stringify(savedPiecesPosition));

    checkIfWon(savedPiecesPosition, setProjectWinner, fireRef);

  }, [savedPiecesPosition])



  // Fireworks
  const fireRef = useRef(null);

  const options = {
    autoresize: true,
    opacity: 0.2,
    acceleration: 1,
    friction: 0.99,
    gravity: 1.5,
    particles: 50,
    traceLength: 3,
    traceSpeed: 5,
    explosion: 3,
    intensity: 15,
    flickering: 100,
    lineStyle: 'round',
    hue: {
      min: 0,
      max: 360
    },
    delay: {
      min: 30,
      max: 80
    },
    rocketsPoint: {
      min: 0,
      max: 100
    },
    lineWidth: {
      explosion: {
        min: 0.3,
        max: 5
      },
      trace: {
        min: 0.3,
        max: 3
      }
    },
    brightness: {
      min: 100,
      max: 100
    },
    decay: {
      min: 0.005,
      max: 0.015
    },
    mouse: {
      click: false,
      move: false,
      max: 1
    }
  }



  return (
    <S.Container $layout={4}>

      {slots.map((slot, i) => { // Aloca as peças nas células da grid

        if (shuffledPieces[i] != '') {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                $imgUrl={pieceImg}
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  try {
                    checkCooldown(lastClick, setLastClick, 350, "Too many clicks!");
                    hardModeIsOn && checkCanMove(e, canMove, setCanMove);

                  } catch (error) {
                    handleErrors(e, error);
                    return;
                  }

                  moveToEmpty(e);

                  savePosition(e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition);
                }}
              >
              </S.Piece>
            </div>
          )
        } else {
          return <div data-empty='true' data-position={slot} key={slot}></div>
        }
      })
      }

      {projectWinner && <>
        <Fireworks
          ref={fireRef}
          options={options}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'absolute'
          }}
        />
        <S.Congrats>YOU WIN!</S.Congrats>
      </>}


      <S.ErrorMsg id='error'>
        Hint: Clicking fast does not make you play better.
      </S.ErrorMsg>
    </S.Container>
  )
}

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
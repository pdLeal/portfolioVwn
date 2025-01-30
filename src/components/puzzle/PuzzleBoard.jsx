import React, { useRef, useState } from 'react'
import * as S from './Puzzle_Style';
import useBoardShuffler from '../../hooks/puzzle/useBoardShuffler';
import checkCooldown from '../../utils/checkCooldown';
import usePuzzleContext from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';
import useSavePoint from '../../hooks/puzzle/useSavePoint';
import handleErrors from '../../utils/handleErrors';
import moveToEmpty from '../../utils/moveToEmpty';
import useCheckMovement from '../../hooks/puzzle/useCheckMovement';

import { Fireworks } from '@fireworks-js/react'
import { useTranslation } from 'react-i18next';

function PuzzleBoard() {
    const fireRef = useRef(null);
  
    const { projectWinner } = useWinnerContext();
    const { hardModeIsOn } = usePuzzleContext();
  
    const { slots, shuffledPieces, pieceImg } = useBoardShuffler();
    const { savePosition } = useSavePoint(fireRef);
    const { checkCanMove } = useCheckMovement();
  
    const [lastClick, setLastClick] = useState(0);
  
    // Fireworks
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
  
    // I18NEXT
    const {t} = useTranslation();

    return (
      <S.Container $layout={4}>
  
        {slots.map((slot, i) => { // Allocates pieces to grid cells
  
          if (shuffledPieces[i] != '') {
            return (
              <div className='slot' data-empty='false' data-position={slot} key={slot}>
                <S.Piece
                  $imgUrl={pieceImg}
                  data-piece={shuffledPieces[i]}
                  onClick={e => {
  
                    try {
                      checkCooldown(lastClick, setLastClick, 550, "Too many clicks!");
                      hardModeIsOn && checkCanMove(e);
  
                    } catch (error) {
                      handleErrors(e, error);
                      return;
                    }
  
                    moveToEmpty(e);
  
                    savePosition(e, shuffledPieces); // shuffledPieces needs to be passed as a prop, otherwise it creates a lot of weird bugs
  
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
          <S.Congrats>{t("uwin")}</S.Congrats>
        </>}
  
        <S.ErrorMsg id='error'>{t("puzzleHint")}</S.ErrorMsg>
      </S.Container>
    )
  }

  export default PuzzleBoard
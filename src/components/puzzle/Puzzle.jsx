import React, { useEffect, useRef, useState } from 'react'
import * as S from './Puzzle_Style';
import { moveToEmpty, checkCanMove, fisherYatesShuffle, savePosition, handleErrors, checkIfWon } from './helpers';
import { checkCooldown } from '../../utils/checkCooldown';
import data from '../../data/Projetos.json';
import usePuzzleContext from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';

import { Fireworks } from '@fireworks-js/react'

function Puzzle({
  gridLayout = 4,
  isHardOn
}) {
  const [lastClick, setLastClick] = useState(0);
  
  const { projectWinner, setProjectWinner } = useWinnerContext();
  
  // Gera a grid e suas células
  const grid = gridLayout * gridLayout;
  const slots = [];
  for (let i = 1; i <= grid; i++) {
    slots.push(i);
  }
  
  // Embaralha as peças ao iniciar a página e determina a imagem do puzzle
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
  const [pieceImg, setPieceImg] = useState('');
  const { setProjectUrl, savedPiecesPosition, setSavedPiecesPosition } = usePuzzleContext();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 4); // Determina qual projeto sera mostrado ao carregar a página
    setPieceImg(data[randomNumber].img);

    setProjectUrl(data[randomNumber].pageUrl); // Garante que o btn peek project abra a página correta

    const shuffled = fisherYatesShuffle(slots);
    shuffled.pop();
    shuffled.push('');

    setShuffledPieces(shuffled);

    // Recupera as posições e quais peças podem se mover do local storage
    const storagePositions = localStorage.getItem('piecesPosition');
    const savedCanMove = localStorage.getItem('canMove');

    if (storagePositions) {
      setSavedPiecesPosition(JSON.parse(storagePositions));
      setShuffledPieces(JSON.parse(storagePositions));

    }

    if (savedCanMove) {
      setCanMove(JSON.parse(savedCanMove));
    }
  }, [])

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => { // checa se venceu sempre q as posições das peças mudam
    if (!isMounted) {
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
    <S.Container $layout={gridLayout}>

      {slots.map((slot, i) => { // Aloca as peças nas células da grid

        if ( shuffledPieces[i] != '') {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                $imgUrl={pieceImg}
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  try {
                    checkCooldown(lastClick, setLastClick, 510, "Too many clicks!");
                    isHardOn && checkCanMove(e, canMove, setCanMove);

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


export default Puzzle
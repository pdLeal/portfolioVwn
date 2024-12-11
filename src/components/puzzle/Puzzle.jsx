import React, { useEffect, useState } from 'react'
import * as S from './Puzzle_Style';
import { checkClickCooldown, moveToEmpty, checkCanMove, fisherYatesShuffle, savePosition } from './helpers';
import data from '../../data/Projetos.json';
import usePuzzleContext from '../../contexts/PuzzleContext';
import useWinnerContext from '../../contexts/WinnerContext';

function Puzzle({
  gridLayout = 4,
  isHardOn
}) {
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
  const [lastClick, setLastClick] = useState(0);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [pieceImg, setPieceImg] = useState('');
  const { setProjectWinner } = useWinnerContext();

  // Gera a grid e suas células
  const grid = gridLayout * gridLayout;
  const slots = [];
  for (let i = 1; i <= grid; i++) {
    slots.push(i);
  }

  // Embaralha as peças ao iniciar a página e determina a imagem do puzzle
  const { setProjectUrl, savedPiecesPosition, setSavedPiecesPosition } = usePuzzleContext();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 4);
    setPieceImg(data[randomNumber].img);

    setProjectUrl(data[randomNumber].pageUrl); // Garante que o btn peek project abra a página correta

    const shuffled = fisherYatesShuffle(slots);
    shuffled.pop();
    shuffled.push('');

    setShuffledPieces(shuffled);

    const saved = localStorage.getItem('piecesPosition');

    if (saved) {
      setSavedPiecesPosition(JSON.parse(saved));
      setShuffledPieces(JSON.parse(saved));

    }
  }, [])

  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    localStorage.setItem('piecesPosition', JSON.stringify(savedPiecesPosition));

  }, [savedPiecesPosition])



  return (
    <S.Container $layout={gridLayout}>

      {slots.map((slot, i) => { // Aloca as peças nas células da grid

        if (savedPiecesPosition.length == 0 && shuffledPieces[i] != '') {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                $imgUrl={pieceImg}
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  checkClickCooldown(lastClick, setLastClick);

                  isHardOn && checkCanMove(e, canMove, setCanMove);

                  moveToEmpty(e);

                  savePosition(e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition, setProjectWinner);
                }}
              >
              </S.Piece>
            </div>
          )
        } else if (shuffledPieces[i] == '') {
          return <div data-empty='true' data-position={slot} key={slot}></div>
        } else {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                $imgUrl={pieceImg}
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  checkClickCooldown(lastClick, setLastClick);

                  isHardOn && checkCanMove(e, canMove, setCanMove);

                  moveToEmpty(e);

                  savePosition(e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition, setProjectWinner);
                }}
              >
              </S.Piece>
            </div>
          )
        }
      })
      }
    </S.Container>
  )
}


export default Puzzle
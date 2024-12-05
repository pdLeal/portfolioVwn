import React, { useEffect, useState } from 'react'
import * as S from './Puzzle_Style';
import { checkClickCooldown, moveToEmpty, checkCanMove, fisherYatesShuffle } from './helpers';
import data from '../../data/Projetos.json';

function Puzzle({
  gridLayout = 4,
  isHardOn
}) {
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
  const [lastClick, setLastClick] = useState(0);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [pieceImg, setPieceImg] = useState('');
  // const [piecesPositions, setPiecesPositions] = useState([]);

  // Gera a grid e suas células
  const grid = gridLayout * gridLayout;
  const slots = [];
  for (let i = 1; i <= grid; i++) {
    slots.push(i);
  }

  // Embaralha as peças ao iniciar a página e determina a imagem do puzzle
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 4);
    setPieceImg(data[randomNumber].img);

    setShuffledPieces(fisherYatesShuffle(slots));

  }, [])

  return (
    <S.Container $layout={gridLayout}>

      {slots.map((slot, i) => { // Aloca as peças nas células da grid
        if (slot < grid) {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                $imgUrl={pieceImg}
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  checkClickCooldown(lastClick, setLastClick);

                  isHardOn && checkCanMove(e, canMove, setCanMove);

                  moveToEmpty(e);
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

      {/* 
       // if (localStorage.getItem('piecesPositions')) {
    //   setPiecesPositions(localStorage.getItem('piecesPositions'));

    // } else {
       // localStorage.setItem('skippable', true);

    // }
       */}

    </S.Container>
  )
}


export default Puzzle
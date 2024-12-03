import React, { useEffect, useState } from 'react'
import * as S from './Puzzle_Style';
import {checkClickCooldown, moveToEmpty, checkCanMove,  fisherYatesShuffle} from './helpers'

function Puzzle() {
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
  const [lastClick, setLastClick] = useState(0);
  const [shuffledPieces, setShuffledPieces] = useState([]);
  const [piecesPositions, setPiecesPositions] = useState([]);

  const gridLayout = [];
  const numOfSlots = 16;
  for (let i = 1; i <= numOfSlots; i++) {
    gridLayout.push(i);
  }


  useEffect(() => {
    // if (localStorage.getItem('piecesPositions')) {
    //   setPiecesPositions(localStorage.getItem('piecesPositions'));

    // } else {
      setShuffledPieces(fisherYatesShuffle(gridLayout));
      // localStorage.setItem('skippable', true);

    // }
  }, [])

  return (
    <S.Container $layout={Math.sqrt(numOfSlots)}>

      {gridLayout.map((slot, i) => {
        if (slot < numOfSlots) {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece
                data-piece={shuffledPieces[i]}
                onClick={e => {

                  checkClickCooldown(lastClick, setLastClick);

                  checkCanMove(e, canMove, setCanMove);

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

      {/* piecesPositions.length > 0 ? gridLayout.map((slot, i) => {
        if (slot < numOfSlots) {
          return (
            <div className='slot' data-empty='false' data-position={slot} key={slot}>
              <S.Piece data-piece={piecesPositions[i]} onClick={e => {
                moveToEmpty(e, canMove, setCanMove, lastClick, setLastClick);
              }}></S.Piece>
            </div>
          )
        } else {
          return <div data-empty='true' data-position={slot} key={slot}></div>
        }
      }) :  */}

    </S.Container>
  )
}


export default Puzzle
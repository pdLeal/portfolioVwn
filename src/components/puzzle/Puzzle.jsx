import React, { useEffect, useState } from 'react'
import * as S from './Puzzle_Style';

function moveToEmpty(e, canMove, setCanMove, lastClick, setLastClick) {

  // Bloqueia cliques consegcutivos ou em mais de uma peça em pouco tempo
  const clickDelay = 500;
  const now = Date.now();
  if (now - lastClick < clickDelay) {
    return;

  } else {
    setLastClick(now);
  }

  const clickedElem = e.target;
  const emptyElem = document.querySelector('[data-empty=true]');

  // const positionInGrid = clickedElem.parentElement.dataset.position;

  // if (!canMove.includes(positionInGrid)) {
  //   return; // Impede que peças que não estão proximas se mexam
  // }

  // // Determina as peças que podem se mover p/ o próximo espaço vazio
  // const numPosition = +positionInGrid;
  // // const topSlot = `${numPosition - 3}`; 3x3 GRID
  // // const bottomSlot = `${numPosition + 3}`;
  // // const leftSlot = `${
  // //                     (numPosition - 1) == 0 ||
  // //                     (numPosition - 1) == 3 ||
  // //                     (numPosition - 1) == 6 ? '' : numPosition - 1
  // //                   }`;
  // // const rightSlot = `${
  // //                     (numPosition + 1) == 4 ||
  // //                     (numPosition + 1) == 7 ||
  // //                     (numPosition + 1) == 10 ? '' : numPosition + 1
  // //                   }`;

  // const topSlot = `${numPosition - 4}`; // 4x4 GRID
  // const bottomSlot = `${numPosition + 4}`;
  // const leftSlot = `${
  //                     (numPosition - 1) == 4 ||
  //                     (numPosition - 1) == 8 ||
  //                     (numPosition - 1) == 12 ? '' : numPosition - 1
  //                   }`;
  // const rightSlot = `${
  //                     (numPosition + 1) == 5 ||
  //                     (numPosition + 1) == 9 ||
  //                     (numPosition + 1) == 13 ? '' : numPosition + 1
  //                   }`;
  // const tempArray = [topSlot, bottomSlot, leftSlot, rightSlot];
  // setCanMove(tempArray);


  // Calcula a posição do empty e do clicked
  const clicketRect = clickedElem.getBoundingClientRect();
  const emptyRect = emptyElem.getBoundingClientRect();

  // Calcula a diferença
  const deltaX = emptyRect.left - clicketRect.left;
  const deltaY = emptyRect.top - clicketRect.top;

  // Aplica um estilo de transformação temporária para a posição
  clickedElem.style.transition = "transform 0.5s ease-in-out";
  clickedElem.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

  // Aguarda a transição terminar antes de mover no DOM
  setTimeout(() => {
    // Remove o transform
    clickedElem.style.transition = "";
    clickedElem.style.transform = "";


    // Atualiza o DOM
    clickedElem.parentElement.dataset.empty = 'true';

    emptyElem.appendChild(clickedElem); // add a peça ao espaço vazio


    emptyElem.dataset.empty = 'false';
  }, 500); // Duração da animação

}

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      // Escolha um índice aleatório entre 0 e i
      const j = Math.floor(Math.random() * (i + 1));
      // Troque os elementos array[i] e array[j]
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Puzzle() {
  const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
  const [lastClick, setLastClick] = useState(0);
  const [shuffledPieces, setShuffledPieces] = useState([]);

  const gridLayout = [];
  const numOfSlots = 16;
  for (let i = 1; i <= numOfSlots; i++) {
    gridLayout.push(i);
  }

 
  useEffect(() => {
    setShuffledPieces(fisherYatesShuffle(gridLayout));
  }, [])



  return (
    <S.Container $layout={Math.sqrt(numOfSlots)}>

      {
        gridLayout.map((slot, i) => {
          if (slot < numOfSlots) {
            return (
              <div className='slot' data-empty='false' data-position={slot} key={slot}>
                <S.Piece data-piece={shuffledPieces[i]} onClick={e => {
                  moveToEmpty(e, canMove, setCanMove, lastClick, setLastClick);
                }}></S.Piece>
              </div>
            )
          } else {
            return <div data-empty='true' data-position={slot} key={slot}></div>
          }
        })
      }

    </S.Container>
  )
}


export default Puzzle
import { useState } from "react";

function useCheckMovement() {
    const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
    const checkCanMove = (e) => {

        const clickedElem = e.target;

        const positionInGrid = clickedElem.parentElement.dataset.position;

        if (!canMove.includes(positionInGrid)) {
            throw new Error("This piece cannot move!"); // Impede que peças que não estão proximas se mexam
        }

        // Determina as peças que podem se mover p/ o próximo espaço vazio
        const numPosition = +positionInGrid;

        const topSlot = `${numPosition - 4}`; // 4x4 GRID
        const bottomSlot = `${numPosition + 4}`;
        const leftSlot = `${(numPosition - 1) == 4 ||
            (numPosition - 1) == 8 ||
            (numPosition - 1) == 12 ? '' : numPosition - 1
            }`;
        const rightSlot = `${(numPosition + 1) == 5 ||
            (numPosition + 1) == 9 ||
            (numPosition + 1) == 13 ? '' : numPosition + 1
            }`;
        const tempArray = [topSlot, bottomSlot, leftSlot, rightSlot];

        setCanMove(tempArray);
        localStorage.setItem('canMove', JSON.stringify(tempArray));
    }

    return { checkCanMove }
}

export default useCheckMovement
// // Determina as peças que podem se mover p/ o próximo espaço vazio numa grid 3x3
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
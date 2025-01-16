import { useState } from "react";

function useCheckMovement() {
    const [canMove, setCanMove] = useState(['12', '15']); // '6', '8'
    const checkCanMove = (e) => {
        const clickedElem = e.target;
        const positionInGrid = clickedElem.parentElement.dataset.position;

        if (!canMove.includes(positionInGrid)) {
            throw new Error("This piece cannot move!");
        }

        // Determines which pieces can move to the empty space
        const topSlot = `${+positionInGrid - 4}`;
        const bottomSlot = `${+positionInGrid + 4}`;
        const leftSlot = `${(+positionInGrid - 1) == 4 ||
                            (+positionInGrid - 1) == 8 ||
                            (+positionInGrid - 1) == 12 ? ''
                                                        : +positionInGrid - 1
                            }`;
        const rightSlot = `${(+positionInGrid + 1) == 5 ||
                             (+positionInGrid + 1) == 9 ||
                             (+positionInGrid + 1) == 13 ? ''
                                                        : +positionInGrid + 1
                            }`;
        const tempArray = [topSlot, bottomSlot, leftSlot, rightSlot];

        setCanMove(tempArray);
        localStorage.setItem('canMove', JSON.stringify(tempArray));
    }

    return { checkCanMove }
}

export default useCheckMovement
// // Determina as peças que podem se mover p/ o próximo espaço vazio numa grid 3x3
// // const topSlot = `${positionInGrid - 3}`; 3x3 GRID
// // const bottomSlot = `${positionInGrid + 3}`;
// // const leftSlot = `${
// //                     (positionInGrid - 1) == 0 ||
// //                     (positionInGrid - 1) == 3 ||
// //                     (positionInGrid - 1) == 6 ? '' : positionInGrid - 1
// //                   }`;
// // const rightSlot = `${
// //                     (positionInGrid + 1) == 4 ||
// //                     (positionInGrid + 1) == 7 ||
// //                     (positionInGrid + 1) == 10 ? '' : positionInGrid + 1
// //                   }`;
export function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        // Escolha um índice aleatório entre 0 e i
        const j = Math.floor(Math.random() * (i + 1));
        // Troque os elementos array[i] e array[j]
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export function handleErrors(e, error) {
    if (error.message == "Too many clicks!") {
        const errorMsg = document.getElementById('error');
        errorMsg.classList.add("showError");

        setTimeout(() => {
            errorMsg.classList.remove("showError");

        }, 3500);

    } else {
        const clickedElem = e.target;
        clickedElem.classList.add("shakePiece");

        setTimeout(() => {
            clickedElem.classList.remove("shakePiece");

        }, 525);

    }
}

export function checkCanMove(e, canMove, setCanMove) {
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

export function moveToEmpty(e) {
    const clickedElem = e.target;
    const emptyElem = document.querySelector('[data-empty=true]');

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

export function savePosition(e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition) {
    const clickedElemIndex = e.target.parentElement.dataset.position - 1;
    const emptyElemIndex = document.querySelector('[data-empty=true]').dataset.position - 1;

    let temp;
    if (savedPiecesPosition.length == 0) {
        temp = [...shuffledPieces];

    } else {
        temp = [...savedPiecesPosition];

    }

    [temp[clickedElemIndex], temp[emptyElemIndex]] = [temp[emptyElemIndex], temp[clickedElemIndex]]

    setSavedPiecesPosition(temp);



}

export function checkIfWon(savedPiecesPosition, setProjectWinner, ref) {
    // Organiza o array e descobre o espaço vazio p/ comparação
    const sortedPositions = savedPiecesPosition.filter(empty => empty != '').sort((a, b) => {
        return a - b;
    });

    let missingNumber;
    for (let i = 0; i < sortedPositions.length; i++) {
        if (sortedPositions[i] !== i + 1) {
            missingNumber = i + 1;
           
            sortedPositions.splice(i, 0, '');
            break;
        }
    }
    if (!missingNumber) {
        sortedPositions.push(''); // Caso o último número esteja ausente
    }
    
    if(JSON.stringify(savedPiecesPosition) == JSON.stringify(sortedPositions)) {
        setProjectWinner(true);
        localStorage.setItem('isProjectWinner', true);

        setTimeout(() => {
            ref.current.waitStop();
        }, 10000)

    }
}

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

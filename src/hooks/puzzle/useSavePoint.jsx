import { useEffect, useState } from "react";
import usePuzzleContext from "../../contexts/PuzzleContext";
import useWinnerContext from "../../contexts/WinnerContext";

function useSavePoint() {
    const [isMounted, setIsMounted] = useState(false);
    const { savedPiecesPosition } = usePuzzleContext();
    const { setProjectWinner } = useWinnerContext();

    useEffect(() => { // Att o local storage e verifica condição de vintória

        if (!isMounted) { // Most of the time prevents a bug where all the pieces are the same
            setIsMounted(true);
            return;
        }

        localStorage.setItem('piecesPosition', JSON.stringify(savedPiecesPosition));

        // checkIfWon(savedPiecesPosition, setProjectWinner, fireRef);

    }, [savedPiecesPosition])

    const checkIfWon = (savedPiecesPosition, setProjectWinner, ref) => {
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
        if (!missingNumber) sortedPositions.push(''); // Caso o último número esteja ausente

        if (JSON.stringify(savedPiecesPosition) == JSON.stringify(sortedPositions)) {
            setProjectWinner(true);
            localStorage.setItem('isProjectWinner', true);

            setTimeout(() => {
                ref.current.waitStop();
            }, 10000)

        }
    }

    const savePosition = (e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition) => {
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

    return { savePosition }
}

export default useSavePoint
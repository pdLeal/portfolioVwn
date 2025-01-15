import { useEffect, useState } from "react";
import usePuzzleContext from "../../contexts/PuzzleContext";
import useWinnerContext from "../../contexts/WinnerContext";
import isPuzzleSolved from "../../utils/isPuzzleSolved";

function useSavePoint(fireRef) {
    const [isMounted, setIsMounted] = useState(false);
    const { savedPiecesPosition } = usePuzzleContext();
    const { setProjectWinner } = useWinnerContext();

    useEffect(() => { // Updates local storage and checks if puzzle is solved

        if (!isMounted) { // Most of the time prevents a bug where all the pieces are the same
            setIsMounted(true);
            return;
        }

        localStorage.setItem('piecesPosition', JSON.stringify(savedPiecesPosition));

        isPuzzleSolved(savedPiecesPosition, setProjectWinner, fireRef);

    }, [savedPiecesPosition])

    const savePosition = (e, shuffledPieces, savedPiecesPosition, setSavedPiecesPosition) => {
        const clickedElemIndex = e.target.parentElement.dataset.position - 1;
        const emptyElemIndex = document.querySelector('[data-empty=true]').dataset.position - 1;

        let temp = [];
        if (savedPiecesPosition.length == 0) {
            temp = [...shuffledPieces];

        } else {
            temp = [...savedPiecesPosition];

        }
        
        [temp[clickedElemIndex], temp[emptyElemIndex]] = [temp[emptyElemIndex], temp[clickedElemIndex]];

        setSavedPiecesPosition(temp);

    }

    return { savePosition }
}

export default useSavePoint
import { useState } from "react";
import useWinnerContext from "../../contexts/WinnerContext";
import usePuzzleContext from "../../contexts/PuzzleContext";

function useRestart() {
    const [reloadPuzzleBoard, setReloadPuzzleBoard] = useState(true); // true/false doens't mattter, just needs to change to remount the whole comp

    const { setProjectWinner } = useWinnerContext();
    const { setSavedPiecesPosition } = usePuzzleContext();

    const handleRestart = () => {
        setReloadPuzzleBoard(!reloadPuzzleBoard);

        localStorage.removeItem('piecesPosition');
        localStorage.removeItem('canMove');
        setProjectWinner(false);
        setSavedPiecesPosition([]);
    }

    return { reloadPuzzleBoard, handleRestart }
}

export default useRestart
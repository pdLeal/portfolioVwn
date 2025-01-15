import { createContext, useContext } from "react";

const PuzzleContext = createContext({
    savedPiecesPosition: [],
    canMove: [],
    projectUrl: '',
    hardModeIsOn: false,
    setSavedPiecesPosition: () => {},
    setCanMove: () => {},
    setProjectUrl: () => {},
    setHardModeIsOn: () => {},
});

export default function usePuzzleContext() {
    return useContext(PuzzleContext);
}

export const PuzzleProvider = PuzzleContext.Provider;
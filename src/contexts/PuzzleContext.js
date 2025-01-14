import { createContext, useContext } from "react";

const PuzzleContext = createContext({
    savedPiecesPosition: [],
    projectUrl: '',
    hardModeIsOn: false,
    setSavedPiecesPosition: () => {},
    setProjectUrl: () => {},
    setHardModeIsOn: () => {},
});

export default function usePuzzleContext() {
    return useContext(PuzzleContext);
}

export const PuzzleProvider = PuzzleContext.Provider;
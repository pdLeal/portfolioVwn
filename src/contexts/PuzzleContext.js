import { createContext, useContext } from "react";

const PuzzleContext = createContext({
    projectUrl: '',
    savedPiecesPosition: [],
    setSavedPiecesPosition: () => {},
    setProjectUrl: () => {},
});

export default function usePuzzleContext() {
    return useContext(PuzzleContext);
}

export const PuzzleProvider = PuzzleContext.Provider;
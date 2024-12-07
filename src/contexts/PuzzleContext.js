import { createContext, useContext } from "react";

const PuzzleContext = createContext({
    restart: false,
    setRestart: () => {},
});

export default function usePuzzleContext() {
    return useContext(PuzzleContext);
}

export const PuzzleProvider = PuzzleContext.Provider;
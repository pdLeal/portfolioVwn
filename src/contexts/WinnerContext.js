import { createContext, useContext } from "react";

const WinnerContext = createContext({
    aboutWinner: false,
    projectWinner: false,
    setAboutWinner: () => {},
    setProjectWinner: () => {},
});

export default function useWinnerContext() {
    return useContext(WinnerContext);
}

export const WinnerProvider = WinnerContext.Provider;
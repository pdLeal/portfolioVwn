import { createContext, useContext } from "react";

const WeakContext = createContext({
    isWeak: false,
    setIsWeak: () => {},
});

export default function useWeakContext() {
    return useContext(WeakContext);
}

export const WeakProvider = WeakContext.Provider;
import { createContext, useContext } from "react";

const KcContext = createContext({
    usedKc: false,
    setUsedKc: () => {},
});

export default function useKcContext() {
    return useContext(KcContext);
}

export const KcProvider = KcContext.Provider;
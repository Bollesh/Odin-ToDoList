import { createContext, useState } from "react";

export const InvalidInfoModalContext = createContext();
export const ShowInvalidInfoModalContext = createContext();

export default function InvalidInfoModalContextProvider({children}){
    const [invalidInfo, showInvalidInfo] = useState(false);
    return (
    <InvalidInfoModalContext.Provider value={invalidInfo}>
        <ShowInvalidInfoModalContext.Provider value={showInvalidInfo}>
            {children}
        </ShowInvalidInfoModalContext.Provider>
    </InvalidInfoModalContext.Provider>)
}
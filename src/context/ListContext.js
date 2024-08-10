import { createContext, useState } from "react";

export const ListContext = createContext();

export default function ListContextProvider({children}){
    const anotherList = [];
    return (
        <ListContext.Provider value={anotherList}>
                {children}
        </ListContext.Provider>
    )
}
import { createContext, useState, useEffect } from "react";

export const ListContext = createContext();
export const SetListContext = createContext();

export default function ListContextProvider({children}){
    const localList = JSON.parse(localStorage.getItem("list"));
    const [list, setList] = useState(localList ? localList : []);
    return (
        <ListContext.Provider value={list}>
            <SetListContext.Provider value={setList}>
                {children}
            </SetListContext.Provider>
        </ListContext.Provider>
    )
}
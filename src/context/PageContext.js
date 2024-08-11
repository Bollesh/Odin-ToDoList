import { createContext, useState } from "react";

export const PageContext = createContext();
export const UpdatePageContext = createContext();

export default function PageContextProvider({children}){
    const [page, setPage] = useState({home: true, today: false, week: false})
    return (
        <PageContext.Provider value={page}>
            <UpdatePageContext.Provider value={setPage}>
                {children}
            </UpdatePageContext.Provider>
        </PageContext.Provider>
    )
}
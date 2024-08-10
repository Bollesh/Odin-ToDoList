import { createContext, useState } from "react";

export const AddModalContext = createContext();
export const SetModalContext = createContext();

export default function AddModalContextProvider({children}){
    const [isModalVisible, setModalVisibility] = useState(false);
    return (
        <AddModalContext.Provider value={isModalVisible}>
            <SetModalContext.Provider value={setModalVisibility}>
                {children}
            </SetModalContext.Provider>
        </AddModalContext.Provider>
    )
}
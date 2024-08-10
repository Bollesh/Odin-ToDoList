//react:
import React from 'react'
import { createRoot } from 'react-dom/client'

//css:
import './style.css'

//App:
import App from './App'

//context:
import AddModalContextProvider from './context/AddModalContext'
import ListContextProvider from './context/ListContext'


const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);
root.render(
    <React.StrictMode>
        <ListContextProvider>
            <AddModalContextProvider>
                <App />
            </AddModalContextProvider>
        </ListContextProvider>
    </React.StrictMode>
)

//react:
import React from 'react'
import { createRoot } from 'react-dom/client'

//css:
import './style.css'

//App:
import App from './App'

//context Providers:
import AddModalContextProvider from './context/AddModalContext'
import ListContextProvider from './context/ListContext'
import PageContextProvider from './context/PageContext'
import InvalidInfoModalContextProvider from './context/InvalidInfoModal'

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);
root.render(
    <React.StrictMode>
        <InvalidInfoModalContextProvider>
            <PageContextProvider>
                <ListContextProvider>
                    <AddModalContextProvider>
                        <App />
                    </AddModalContextProvider>
                </ListContextProvider>
            </PageContextProvider>
        </InvalidInfoModalContextProvider>
    </React.StrictMode>
)

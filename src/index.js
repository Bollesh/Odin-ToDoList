import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
// import bg from 'images/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg'

const rootElem = document.querySelector('#root');
const root = createRoot(rootElem);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

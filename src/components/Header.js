import { motion, AnimatePresence } from "framer-motion";
import { useState, useContext } from "react"


export default function Header(){
    const [isDarkMode, setDarkMode] = useState(true);
    const CSSRoot = document.querySelector(':root').style
    const headerColor = isDarkMode ? "#008b91" : "#921A40"
    const bodyColor = isDarkMode ? "#393E46" : "#F4D9D0"
    const sidebarColor = isDarkMode ? "#222831" : "#D9ABAB"
    CSSRoot.setProperty('--header-color', headerColor)
    CSSRoot.setProperty('--body-color', bodyColor)
    CSSRoot.setProperty('--sidebar-color', sidebarColor)
    const themeImg = isDarkMode ? require("../images/sun-solid.svg") : require("../images/moon-solid.svg");

    function themeToggle(){
        setDarkMode(prev=>!prev)
    }


    return (
        <header>
            <div className="logo">
                <img src={require(`../images/list-solid.svg`)} alt="" />
                <h1>To Do List</h1>
            </div>
            <button className="themeToggle" onClick={themeToggle}>
                <AnimatePresence>
                    <motion.img
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0, transition: "opacity 0.2s"}}
                        src={themeImg} alt="" className="themeImg" />
                </AnimatePresence>
            </button>
        </header>
    )
}
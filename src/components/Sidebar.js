import { motion } from "framer-motion"
import { useContext } from "react"

import { SetModalContext } from "../context/AddModalContext"

const mainVariant = {
    hover:{},
}

const buttonVariant = {
    hover: {boxShadow: '0 0 20px white', scale: 1.1}
}

export default function Sidebar(){
    const setModalVisibility = useContext(SetModalContext)

    function modalVisibility(){
        setModalVisibility(true);
    }
    return (
        <div className="sidebar">
            <motion.button variants={buttonVariant} whileHover="hover" className="home">Home</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="today">Today</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="week">Week</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="notes">Notes</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="add" onClick={modalVisibility}>
                <img src={require('../images/plus-solid.svg')} alt="plus icon" />
            </motion.button>
        </div>
    )
}
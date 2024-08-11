import { motion } from "framer-motion"
import { useContext } from "react"

import { SetModalContext } from "../context/AddModalContext"
import { UpdatePageContext } from "../context/PageContext";


const mainVariant = {
    hover:{},
}

const buttonVariant = {
    hover: {boxShadow: '0 0 10px white', scale: 1.1}
}

export default function Sidebar(){
    const setModalVisibility = useContext(SetModalContext)
    const setPage = useContext(UpdatePageContext)

    function modalVisibility(){
        setModalVisibility(true);
    }

    function setHome(){
        setPage({home: true, today: false, week: false})
    }

    function setToday(){
        setPage({home: false, today: true, week: false})
    }

    function setWeek(){
        setPage({home: false, today: false, week: true})
    }
    return (
        <div className="sidebar">
            <motion.button variants={buttonVariant} whileHover="hover" className="home" onClick={setHome}>Home</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="today" onClick={setToday}>Today</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="week" onClick={setWeek}>Week</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="notes">Notes</motion.button>
            <motion.button variants={buttonVariant} whileHover="hover" className="add" onClick={modalVisibility}>
                <img src={require('../images/plus-solid.svg')} alt="plus icon" />
            </motion.button>
        </div>
    )
}
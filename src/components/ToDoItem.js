import { motion, AnimatePresence } from "framer-motion"
import { useContext } from "react"

import { ListContext } from "../context/ListContext"
import { SetListContext } from "../context/ListContext"

export default function ToDoItem({title, date, priority, idx}){
    const sidebarClr = priority == "P1" ? "#FF3F00" : (priority == "P2" ? "#FFCD74" : "green")
    // const list = useContext(ListContext)
    const setList = useContext(SetListContext);
    function deleteItem(idx){
        setList(prev=>{
            const newList = []
            for(let i = 0; i < prev.length; i++){
                if(i != idx){
                    newList.push(prev[i]);
                }
            }
            return newList
        })
    }
    return (
        <motion.div
            initial={{y: 100, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{type: "spring"}}
            className="toDoItem" style={{borderLeft:`10px solid ${sidebarClr}`}}
        >
            <h1 className="title">To Do: {title}</h1>
            <div className="otherData">
                <h2 className="date">Due By: {date}</h2>
                <button className="delete" onClick={()=>deleteItem(idx)}>
                    <img src={require("../images/trash-solid.svg")} alt="" />
                </button>
            </div>
        </motion.div>
    )
}
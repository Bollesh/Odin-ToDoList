import { AnimatePresence, motion } from "framer-motion"
import { useContext, useEffect } from "react"
import { ListContext } from "../context/ListContext"

import ToDoItem from "./ToDoItem"

export default function ListPage(){
    const list = useContext(ListContext)
    const items = []
    for(let i = 0; i < list.length; i++){
        items[i] = <ToDoItem
                        key={i}         
                        title={list[i].title}
                        date={list[i].date}
                        priority={list[i].prior}
                        idx={i}
                    />
    }
    localStorage.setItem("list", JSON.stringify(list));
    return(
        <section className="listPage">
            {items}
        </section>
    )
}
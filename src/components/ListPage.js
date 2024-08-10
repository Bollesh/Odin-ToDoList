import { useContext } from "react"
import { ListContext } from "../context/ListContext"

import ToDoItem from "./ToDoItem"

export default function ListPage(){
    const list = useContext(ListContext)
    const items = list.map(item=>
        <ToDoItem
            title={item.title}
            date={item.date}
            priority={item.prior}
        />
    )
    return(
        <section className="listPage">
            {items}
        </section>
    )
}
import { useContext } from "react";

import { ListContext } from "../context/ListContext";

import ToDoItem from "./ToDoItem";

export default function TodayList(){
    const list = useContext(ListContext)
    const todayDate = new Date();
    const date = todayDate.getDate().toString();
    const month = todayDate.getMonth()+1;
    const year = todayDate.getFullYear();
    const today = `${year}-${month >= 10 ? month : `0${month}`}-${date}`
    
    
    const todayList = list.filter(checkToday);
    function checkToday(item){
        return item.date == today;
    }
    const todayListElems = []
    for(let i = 0; i < todayList.length; i++){
        todayListElems[i] = <ToDoItem
                        key={i}         
                        title={todayList[i].title}
                        date={todayList[i].date}
                        priority={todayList[i].prior}
                        idx={i}
                    />
    }
    return (
        <section className="todayList">
            {todayListElems}
        </section>
    )
}
import { useContext } from "react";

import { ListContext } from "../context/ListContext";

import ToDoItem from "./ToDoItem";

export default function WeekList(){
    const list = useContext(ListContext)
    const todayDate = new Date();
    const date = todayDate.getDate().toString();
    const month = todayDate.getMonth()+1;
    const year = todayDate.getFullYear();  
    
    const weekList = list.filter(checkToday);
    function checkToday(item){
        const dateInList = item.date.split('-')
        return (year == dateInList[0] && month == dateInList[1] && dateInList[2] - date <= 7 && dateInList[2] - date >= 0);
    }
    console.log(weekList)
    const weekListElems = []
    for(let i = 0; i < weekList.length; i++){
            weekListElems[i] = <ToDoItem
                    key={i}         
                    title={weekList[i].title}
                    date={weekList[i].date}
                    priority={weekList[i].prior}
                    idx={i}
                />
    }
    return (
        <section className="weekList">
            {weekListElems}
        </section>
    )
}
export default function ToDoItem({title, date, priority}){
    return (
        <div className="toDoItem">
            {title}
            {date}
            {priority}
        </div>
    )
}
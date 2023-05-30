
import "./todo-header.css"

const ToDoHeader = ({ employees, increased }) => {
    return (
        <div className="toDo-header">
            <h1>Список дел</h1>
            <h2>Количество дел: {employees} </h2>
            <h2>Дел сделано: {increased} </h2>
        </div>
    )
}

export default ToDoHeader;
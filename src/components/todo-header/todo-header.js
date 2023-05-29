
import "./todo-header.css"

const ToDoHeader = ({data}) => {
    return (
        <div className="toDo-header">
            <h1>Список дел</h1>
            <h2>Количество дел: {data.length} </h2>
            <h2>Дел сделано: </h2>
        </div>
    )
}

export default ToDoHeader;
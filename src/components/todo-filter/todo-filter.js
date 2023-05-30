import "./todo-filter.css";

const TodoFilter = () => {
    return(
        <div className="btn-group">
            <button className="btn btn-outline-dark" type="button">Все задачи</button>
            <button className="btn btn-outline-dark" type="button">Важные задачи</button>
            <button className="btn btn-outline-dark" type="button">Выполненные задачи</button>
        </div>
    );
}

export default TodoFilter;
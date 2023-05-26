
import TodoListItem from "../todo-list-item/todo-list-item"

import "./todo-list.css";

const TodoList = () => {
    return (
        <ul className="app-list list-droup">
            <TodoListItem/>
            <TodoListItem/>
            <TodoListItem/>
        </ul>
    )
}

export default TodoList;
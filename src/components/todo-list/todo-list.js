
import TodoListItem from "../todo-list-item/todo-list-item"

import "./todo-list.css";

const TodoList = ({ data }) => {
    const elements = data.map(item => {
        const{id, ...itemProps} = item;
        return(
            <TodoListItem key={id} {...itemProps}/>

        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TodoList;
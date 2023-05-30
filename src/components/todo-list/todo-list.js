
import TodoListItem from "../todo-list-item/todo-list-item"

import "./todo-list.css";

const TodoList = ({ data, onDelete, onToggleIncrease, onTogleLike }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <TodoListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={() => onToggleIncrease(id)}
                onTogleLike={() => onTogleLike(id)} />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TodoList;
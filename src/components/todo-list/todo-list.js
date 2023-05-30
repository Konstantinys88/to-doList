
import TodoListItem from "../todo-list-item/todo-list-item"

import "./todo-list.css";

const TodoList = ({ data, onDelete, onToggleIncrease, onTogleLike, onTogleProp }) => {
    const elements = data.map(item => {
        const { id, ...itemProps } = item;
        return (
            <TodoListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                // onToggleIncrease={() => onToggleIncrease(id)}
                // onTogleLike={() => onTogleLike(id)} 
                onTogleProp={(e)=>onTogleProp(id, e.currentTarget.getAttribute("data-toggle"))}
                
                />
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default TodoList;
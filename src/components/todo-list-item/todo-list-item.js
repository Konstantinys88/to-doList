import "./todo-list-item.css";



const TodoListItem = ({ todo, todoStatus, increase }) => {
    let classNameLi = "list-group-item d-flex justify-content-between";
    if (increase) {
        classNameLi += " increase";
    }



    return (
        <li className={classNameLi}>
            <span className="list-group-item-label">{todo}</span>
            <input type="text" className="list-group-item-input" defaultValue={todoStatus} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                    className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}

export default TodoListItem;
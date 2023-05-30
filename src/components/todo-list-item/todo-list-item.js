// import { Component } from "react";
import "./todo-list-item.css";



const TodoListItem = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         increase: false,
    //         like: false,
    //     }
    // }

    // onIncrease = () => {
    //     this.setState(({ increase }) => ({
    //         increase: !increase
    //     }))
    // }

    // onLike = () => {
    //     this.setState(({ like }) => ({ like: !like }))
    // }

    
        const { todo, todoStatus, onDelete, onToggleIncrease, onTogleLike, increase, like, onTogleProp } = props;
        // const { increase } = this.state;
        // const { like } = this.state;

        let classNameLi = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNameLi += " increase";
        }
        if (like) {
            classNameLi += " like";
        }

        return (
            <li className={classNameLi}>
                <span
                    className="list-group-item-label"
                    // onClick={onTogleLike}
                    onClick={onTogleProp}
                    data-toggle="like">
                    {todo}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={todoStatus} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        // onClick={onToggleIncrease}
                        onClick={onTogleProp}
                        data-toggle="increase">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        );
    
}

export default TodoListItem;

import "./todo-add.css";

const TodoAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте задачу</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Название" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Важность" />

                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default TodoAddForm;
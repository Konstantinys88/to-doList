import "./todo-filter.css";

const TodoFilter = (props) => {
    const buttonsData = [
        { name: "all", label: "Все задачи" },
        { name: "todoStatus", label: "Важные задачи" },
        { name: "like", label: "Выполненные задачи" },
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const active = props.filter === name;
        const clazz = active ? "btn-light" : "btn-outline-dark";
        return (
            <button
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>)
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default TodoFilter;
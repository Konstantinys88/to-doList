import SearchPanel from "../search-panel/search-panel";
import ToDoHeader from "../todo-header/todo-header";
import TodoFilter from "../todo-filter/todo-filter";
import TodoList from "../todo-list/todo-list";
import TodoAddForm from "../todo-add/todo-add";

import "./app.css";

function App() {

    const data = [
        { todo: "Проснутся", todoStatus: 8, id: 1 },
        { todo: "Покормить кота", todoStatus: 10, id: 2 },
        { todo: "Погладить кота", todoStatus: 9, id: 3 },
        { todo: "Погладить кота", todoStatus: 9, id: 3 },
    ];

    return (
        <div className="app">
            <ToDoHeader />
            <div className="search-panel">
                <SearchPanel />
                <TodoFilter />
            </div>
            <TodoList data={data} />
            <TodoAddForm />
        </div>
    );
}

export default App;



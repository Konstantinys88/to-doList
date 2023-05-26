import SearchPanel from "../search-panel/search-panel";
import ToDoHeader from "../todo-header/todo-header";
import TodoFilter from "../todo-filter/todo-filter";
import TodoList from "../todo-list/todo-list";
import TodoAddForm from "../todo-add/todo-add";

import "./app.css";

function App() {
    return (
        <div className="app">
            <ToDoHeader />
            <div className="search-panel">
                <SearchPanel />
                <TodoFilter />
            </div>
            <TodoList />
            <TodoAddForm />
        </div>
    );
}

export default App;



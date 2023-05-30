import SearchPanel from "../search-panel/search-panel";
import ToDoHeader from "../todo-header/todo-header";
import TodoFilter from "../todo-filter/todo-filter";
import TodoList from "../todo-list/todo-list";
import TodoAddForm from "../todo-add/todo-add";

import { Component } from "react";

import "./app.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { todo: "Проснутся", todoStatus: 8, id: 1, increase: false, like: true },
                { todo: "Покормить кота", todoStatus: 10, id: 2, increase: true, like: false },
                { todo: "Погладить кота", todoStatus: 9, id: 3, increase: false, like: false },
                { todo: "Убрать лоток кота", todoStatus: 9, id: 4, increase: false, like: false },
            ]
        }
        this.maxId = 5;
    }

    addTodo = (todo, todoStatus) => {
        const newTodo = {
            todo,
            todoStatus,
            id: this.maxId++,
            increase: false,
            like: false,
        }
        this.setState(({ data }) => {
            const newArr = [...data, newTodo]; // в старый массив записываем новый обьект
            return {
                data: newArr
            }
        });
    }

    deleteTodo = (id) => {
        this.setState(({ data }) => {
            // Способ со склеиванием массива
            // const index = data.findIndex(elem => elem.id === id);
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];

            return {
                // data: newArr
                // пособ с фильтрацией 
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onToggleIncrease = (id) => {
        //     Способ 1
        // this.setState(({ data }) => {
        //     const index = data.findIndex(elem => elem.id === id);
        //     const old = data[index];
        //     const newItem = { ...old, increase: !old.increase };
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
        //     return {
        //         data:newArr
        //     }
        // })

        //     Способ 2
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }
                return item;
            })
        }))
    }

    onTogleLike = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, like: !item.like }
                }
                return item;
            })
        }))
    }

    render() {
        return (
            <div className="app">
                <ToDoHeader data={this.state.data} />
                <div className="search-panel">
                    <SearchPanel />
                    <TodoFilter />
                </div>
                <TodoList
                    data={this.state.data}
                    onDelete={this.deleteTodo}
                    onToggleIncrease={this.onToggleIncrease}
                    onTogleLike={this.onTogleLike}
                />
                <TodoAddForm onAdd={this.addTodo} />
            </div>
        );
    }
}



export default App;



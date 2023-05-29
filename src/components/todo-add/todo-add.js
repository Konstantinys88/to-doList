import { Component } from "react";
import "./todo-add.css";

class TodoAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTodo: "",
            numberInp: "",
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.nameTodo, this.state.numberInp);
        this.setState({
            nameTodo: '',
            numberInp: ''
        })
    }

    render() {
        const { nameTodo, numberInp } = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте задачу</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Название"
                        name="nameTodo"
                        value={nameTodo}
                        onChange={this.onValueChange} />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Важность"
                        name="numberInp"
                        value={numberInp}
                        onChange={this.onValueChange} />

                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default TodoAddForm;
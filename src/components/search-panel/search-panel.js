import { Component } from "react";

import "./search-panel.css"

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
    }

    onUpdateSearchP = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                type="rext"
                className="form-control search-input"
                placeholder="Наити задачу" 
                value={this.state.term}
                onChange={this.onUpdateSearchP}/>
                
        )
    }
}

export default SearchPanel;
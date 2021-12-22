import React, {Component} from 'react';

class TodoList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        let itemArray = this.state.items;
        
        if(this._inputElement.value !== "") {
            itemArray.push({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
        console.log(itemArray);

        e.preventDefault();
    }

    render(){
        return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={ this.addItem } >
                    <input placeholder='введите задачу' ref={ el => this._inputElement = el } />
                    <button type="submit">Ок</button>
                </form>
            </div>
        </div>
        )
    }
}

export default TodoList;
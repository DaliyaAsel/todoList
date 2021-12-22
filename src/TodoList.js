import React, {Component} from 'react';
import './TodoList.css'
import TodoItems from './TodoItems'

class TodoList extends Component{
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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

           
        }
        // console.log(itemArray);
    
        this._inputElement.value = "";
        e.preventDefault();
    }

    deleteItem(key) {
        let filteredItems = this.state.items.filter( item => {
            return (item.key !== key);
        }) // filteredItems - это новый массив, он содержит все элементы, кроме удаленного

        this.setState({
            items: filteredItems
        });
    }

    render(){
        return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={ this.addItem } >
                    <input placeholder='введите задачу' ref={ el => this._inputElement = el } />
                    <button type="submit">Добавить</button>
                </form>
            </div>
            <TodoItems entries={this.state.items} delete={this.deleteItem} />
        </div>
        )
    }
}

export default TodoList;
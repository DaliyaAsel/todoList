import React, { Component } from "react";
import FlipMove from 'react-flip-move';

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this)
    }

    createTasks(item) { 
        return <li onClick={ () => this.props.delete(item.key)} // по клику удаляем элемент из массива
                     key={item.key}>{item.text}</li>  // перебираем массив
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <div>
                <ul className="theList">
                    <FlipMove duration={250} easing="ease-out">
                         {listItems}
                    </FlipMove>
                </ul>
            </div>
        )
    }
}

export default TodoItems;
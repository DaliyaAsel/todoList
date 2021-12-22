import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import TodoList from './TodoList'

ReactDom.render (
    <div>
        <TodoList />
    </div>,
    document.getElementById('container')
);


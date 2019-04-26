import React from 'react';
import ReactDOM from 'react-dom';
// import ToDoList from './ToDoList';
import TodoList from './TodoList';
import { Provider } from 'react-redux'
import store from './store'

const App = (
    <Provider store = {store}/**核心组件 把store 传给所有的内部组件 提供器 */>
       <TodoList />  
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));


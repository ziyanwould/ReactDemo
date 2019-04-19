import React, { Component } from 'react';
import TodoListUI from './TodoListUI'

import {
    getInputChangeAction,
    getAddItemAction,
    getDeleItemAction,
    getTodoList
} from './store/actionCreators'
import store from  './store'
import 'antd/dist/antd.css';
class ToDoList extends Component {
    constructor(props){
        super(props);
      
       this.state =store.getState()
       this.handleInputChange = this.handleInputChange.bind(this)
       this.handleStoreChanger = this.handleStoreChanger.bind(this)
       this.handleBtnClick = this.handleBtnClick.bind(this)
       this.handleItemDelete= this.handleItemDelete.bind(this)
       store.subscribe(this.handleStoreChanger);
      
    }
    render(){
       return (
        
        <TodoListUI
        inputValue={this.state.inputValue}
        list = {this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
        />
       

       )
      
    }
    componentDidMount(){
        const action = getTodoList();
         //发生给管理员 
       store.dispatch(action);
    }
    handleInputChange(e){
        //创建 action 生成命令
        // const action ={
        //     type:CHANG_INPUT_VALUE,
        //     value:e.target.value
        // }
        const action = getInputChangeAction(e.target.value)// 有利于组件管理 业务逻辑的拆分 集中在一个文件上便于自动化的测试 
       //发生给管理员 
       store.dispatch(action);
    }
    handleStoreChanger(){
        //store 感知变化
        //console.log('change')

        this.setState(store.getState())//重新渲染
    }
    handleBtnClick(){
        // const action ={
        //     type:ADD_TODO_ITEM
        // }
        const action = getAddItemAction()
        store.dispatch(action)
    }
    handleItemDelete(index){
      //console.log(index)
    //   const action ={
    //     type:DELETE_TODO_ITEM,
    //     index
    //    }
       const action = getDeleItemAction(index)
       store.dispatch(action)
    }
  
}

export default ToDoList;

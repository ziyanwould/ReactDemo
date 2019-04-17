import React, { Component } from 'react';
import { Input,Button, List} from 'antd';

import {getInputChangeAction,getAddItemAction,getDeleItemAction} from './store/actionCreators'
import store from  './store'
import 'antd/dist/antd.css';
class ToDoList extends Component {
    constructor(props){
        super(props);
      
       this.state =store.getState()
       this.handleInputChange = this.handleInputChange.bind(this)
       this.handleStoreChanger = this.handleStoreChanger.bind(this)
       this.handleBtnClick = this.handleBtnClick.bind(this)
       store.subscribe(this.handleStoreChanger);
      
    }
    render(){
       return (
        
        <React.Fragment>
        {/* <div>hellow world</div> */}
        <div style={{margin:'10px'}}>
            <Input 
              placeholder="Basic usage"
              value={this.state.inputValue}
              style={{width:'300px',marginRight:'10px'}} 
              onChange={this.handleInputChange}
              />
            <Button onClick={this.handleBtnClick} type="primary">提交</Button>  

            <List style={{marginTop:'10px',width:'300px'}}
           
        
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => (<List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>)}
            />
        </div>
       

        </React.Fragment>
       

       )
      
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

import React, { Component } from 'react';
import { Input,Button, List} from 'antd';

import 'antd/dist/antd.css';
import store from  './store'

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
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
       

        </React.Fragment>
       

       )
      
    }
    
    handleInputChange(e){
        //创建 action 生成命令
        const action ={
            type:'change_input_value',
            value:e.target.value
        }
       //发生给管理员 
       store.dispatch(action);
    }
    handleStoreChanger(){
        //store 感知变化
        //console.log('change')

        this.setState(store.getState())//重新渲染
    }
    handleBtnClick(){
        const action ={
            type:'add_todo_item'
        }

        store.dispatch(action)
    }
  
}

export default ToDoList;

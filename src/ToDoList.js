import React, { Component } from 'react';
import { Input,Button, List} from 'antd';

import 'antd/dist/antd.css';
import store from  './store'

class ToDoList extends Component {
    constructor(props){
        super(props);
      
        this.state =store.getState()
        console.log(this.state)
        // this.state ={
        //     list:[]
        // }
      
    }
    render(){
       return (
        
        <React.Fragment>
        {/* <div>hellow world</div> */}
        <div style={{margin:'10px'}}>
            <Input placeholder="Basic usage" value={this.state.inputValue} style={{width:'300px',marginRight:'10px'}} />
            <Button type="primary">提交</Button>  

            <List style={{marginTop:'10px',width:'300px'}}
           
        
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
            />
        </div>
       

        </React.Fragment>
       

       )
      
    }
  
}

export default ToDoList;

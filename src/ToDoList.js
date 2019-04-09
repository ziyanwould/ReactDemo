import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      inputValue :'',
      list:[]
    }
  }

  render() {
    return (
      <React.Fragment>
         <div>
         <label htmlFor='insertArea'>输入内容</label>{/**扩大点击区域 */}
          <input 
          // 曾经经常
          id='insertArea'
          className='input'
          value={this.state.inputValue} 
          onChange={this.changeinput.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
         </div>
         <ul>
           {
             this.state.list.map((item,index)=>{
               return (
                 <React.Fragment>
                  {/**
                    <li 
                    key={index}
                    onClick={this.handleItemDelete.bind(this,index)}
                     dangerouslySetInnerHTML={{__html:item}}//不设置转译 能输出像<h1>
                    >
            
                  */} 

                 <TodoItem
              
                  count={item}
                  index={index}

                  /**强制绑定父组件的this 不然子组件找不到父组件的方法 */

                  deleteItem={this.handleItemDelete.bind(this)}
                  />
                 </React.Fragment>
               
                 
                 )
             })
           }
         </ul>
      </React.Fragment>
      
    );
  }

  changeinput(e){
    //console.log(e.target.value)
    // let list = [...this.state.list,e.target.inputValue];
    // this.state({
    //   list:list
    // })
    this.setState({
      inputValue:e.target.value
    })
  }
  handleBtnClick(e){
   this.setState({
     list:[...this.state.list,this.state.inputValue],
     inputValue:''
   })
  }
  handleItemDelete(index){
  const list = [...this.state.list];
  list.splice(index,1);
  this.setState({
    list:list
  })
  }
}

export default App;

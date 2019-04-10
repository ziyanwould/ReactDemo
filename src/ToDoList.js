import React, { Component } from 'react';
import TodoItem from './TodoItem'
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    //当组件的state或者props发生改变的时候，render函数就会重新执行
    this.state ={
      inputValue :'',
      list:[]
    }
    /**组件初始化 重新指定this this重定向 建议放头部 */
    this.changeinput = this.changeinput.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
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
            onChange={this.changeinput}
            //不推荐用ref dom
           // ref = {(input)=>{this.input = input}}
          />
          <button onClick={this.handleBtnClick}>提交</button>
         </div>
         <ul>
         {this.getTodoItem()}
         </ul>
        
      </React.Fragment>
      
    );
  }
  getTodoItem(){
    /**代码比较多时候 要进行函数的拆分 不要杂糅一起 */
    return this.state.list.map((item,index)=>{
      return (
      
         
        <TodoItem
         key={item}
         count={item}
         index={index}
         /**强制绑定父组件的this 不然子组件找不到父组件的方法 */
         deleteItem={this.handleItemDelete}
         />
       
      
        
        )
    })
  }
  changeinput(e){
    //console.log(e.target.value)
    // let list = [...this.state.list,e.target.inputValue];
    // this.state({
    //   list:list
    // })

    //旧版的更改数据的方法
    // this.setState({
    //   inputValue:e.target.value
    // })

    //新的应该return一个箭头函数
    // 此时是传递的是一个异步的函数 所以需要value存下数据
    //const value = this.input.value; //不推荐使用 因为会直接操作DOM
    const value = e.target.value
    
    this.setState(()=>({
    
        inputValue:value
     
    }))
  }
  handleBtnClick(e){
    //prevState 是更改数据前的数据 可以直接调用 避免不小心改到state的状态
   this.setState((prevState)=>(
    {
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }
   ))
  }
  handleItemDelete(index){
 

  this.setState((prevState)=>{
    const list = [...prevState.list];
    list.splice(index,1);
    return {list}
  })
  }
}

export default App;

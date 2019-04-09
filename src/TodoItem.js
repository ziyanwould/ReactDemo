import React,{ Component } from 'react';
class TodoItem extends Component{
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);//在这里绑定this 有利于性能优化
    }
    render(){
        /**存一个属性变量值 {}花括号的的结构赋值*/
        const { count } = this.props
        return (
            <div  
        
            onClick={this.handleClick}
            >
                 {count}
            </div>
            )
    }
    handleClick(){
        /**利用结构赋值改写 */
        const {deleteItem,index } = this.props
        deleteItem(index);
       //  this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;
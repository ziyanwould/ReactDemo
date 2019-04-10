import React,{ Component } from 'react';
import PropTyprs from 'prop-types'
class TodoItem extends Component{
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);//在这里绑定this 有利于性能优化
    }

    shouldComponentUpdate(nextProps,nextState){
        //提升性能 数组有更改之后再重新渲染 避免不必要虚拟DOM浪费
        if(nextProps.count!== this.props.count){
            return true
        }else{
            return false
        }
        
    }
    render(){
      
        /**存一个属性变量值 {}花括号的的结构赋值*/
        const { count} = this.props
        /**JSX --> createElemnt --> 虚拟DOM (JS对象 )--> 真实的DOM*/
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
//propTypes 对父组件传过来的数据类型加以核验 类型校验
TodoItem.propTypes ={
    cont:PropTyprs.oneOfType([PropTyprs.string,PropTyprs.number]),//可以是字符串或数字
    deleteItem:PropTyprs.func,
    index:PropTyprs.number

}

export default TodoItem;
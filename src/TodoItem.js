import React,{ Component } from 'react';
import PropTyprs from 'prop-types'
class TodoItem extends Component{
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);//在这里绑定this 有利于性能优化
    }
    render(){
        /**存一个属性变量值 {}花括号的的结构赋值*/
        const { count,text } = this.props
        return (
            <div  
        
            onClick={this.handleClick}
            >
              {text}  - {count}
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
    text:PropTyprs.string.isRequired,//必须要传数值 且不能为空
    cont:PropTyprs.arrayOf(PropTyprs.string,PropTyprs.number),//可以是字符串或数字
    deleteItem:PropTyprs.func,
    index:PropTyprs.number

}
//如果父组件没有传数据 输出默认数据
TodoItem.defaultProps={
    text:'hello world'
}
export default TodoItem;
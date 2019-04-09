import React,{ Component } from 'react';
class TodoItem extends Component{
    constructor(props){
     super(props);
     this.handleClick = this.handleClick.bind(this);//在这里绑定this 有利于性能优化
    }
    render(){
        return (
            <div  
            key={this.props.index}
            onClick={this.handleClick}
            >
                 {this.props.count}
            </div>
            )
    }
    handleClick(){
     this.props.deleteItem(this.props.index)
    }
}

export default TodoItem;
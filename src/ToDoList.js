import React,{ Component } from 'react'
//import store from './store'
import {connect} from 'react-redux'
class TodoList extends  Component {


    render(){
        return(
            <div>
                <div>
                    <input value={this.props.inputValue/**props 访问公共组件 */}
                     onChange={this.props.changeInputValue}
                    />
                    <button
                     onClick={this.props.handleClick}
                    >提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    //不需要写在这里了
    // handleInputChange(e){  
    //     //console.log(e.target.value)

    // }
}
const mapStateToProps = (state) => {//映射到props去
    return{
        inputValue:state.inputValue,
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) =>{//store.dispatch,props
    return{
        changeInputValue(e){
            const action ={
                type:'change_input_value',
                value:e.target.value
            }
            console.log(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action ={
                type:'add_item'
              
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);//让TodoList与store用于做连接
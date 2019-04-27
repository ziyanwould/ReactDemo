import React from 'react'
//import store from './store'
import {connect} from 'react-redux'

const TodoList = (props) =>{
    const {inputValue,changeInputValue,handleClick,handleDelete,list} = props;
    return(
        <div>
            <div>
                <input value={inputValue/**props 访问公共组件 */}
                 onChange={changeInputValue}
                />
                <button
                 onClick={handleClick}
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item,index)=>{
                        return <li onClick={()=>{handleDelete(index)}} key={index}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
    
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
           // console.log(e.target.value)
            dispatch(action)
        },
        handleClick(){
            const action ={
                type:'add_item'
              
            }
            dispatch(action)
        },
        handleDelete(index){
            const action ={
                type:'delete_item',
                index:index
            }
            console.log(index)
            dispatch(action)
        }
    }
}
//用了 connect 方法 把UI组件和方法 集成了 容器组件 
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);//让TodoList与store用于做连接  
import axios from 'axios'
import {
   CHANG_INPUT_VALUE,
   ADD_TODO_ITEM,
   DELETE_TODO_ITEM,
   INIT_LIST_ACTION
} from './actionTYpes'
export const getInputChangeAction = (value)=>({
   type:CHANG_INPUT_VALUE,
   value
})

export const getAddItemAction = ()=>({
    type:ADD_TODO_ITEM
   
 })

 export const getDeleItemAction = (index)=>({
    type:DELETE_TODO_ITEM,
    index
 })

 //创建一个action
 export const initListAction = (data)=>({
   type:INIT_LIST_ACTION,
   data
})

 //创建并返回一个函数
 export const getTodoList = ()=>{
  //返回一个函数
  //已经接收到这个方法了
   return (dispatch) =>{
      axios.get('/react/api/v1/article/todolist').then((res)=>{
         //console.log(res.data.data)
         const data = res.data.data;
         const action = initListAction (data)
         dispatch(action)//推给reducer
     })
   }
}
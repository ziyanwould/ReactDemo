import {CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTYpes'
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
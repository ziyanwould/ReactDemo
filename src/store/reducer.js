import {CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST_ACTION} from './actionTYpes'
const defaultState = {
    inputValue:'',
    list:[]
}

//reducer 可以接受state，但是绝对并不能修改state
export default (state = defaultState,action) =>{  //state 整个数据
    console.log(state,action)
    if (action.type===CHANG_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        //对数据进行返回
        return newState;//返回给store
    }
    if(action.type === ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue) ;
        newState.inputValue = '';
        return newState;//返回给store store 接受你返回的数据 就会把新数据替换原有数据
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1); 
       
        return newState;//返回给store store 接受你返回的数据 就会把新数据替换原有数据
    }
    if(action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.data;
       
        return newState;//返回给store store 接受你返回的数据 就会把新数据替换原有数据
    }
    return state
}
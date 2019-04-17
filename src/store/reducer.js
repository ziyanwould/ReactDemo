import {CHANG_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM} from './actionTYpes'
//不能有异步的操作 不能有时间的操作 不能有异步的请求 不然就不是纯函数 （——给固定的输入 就有固定的输出 而且没有任何的副作用）
const defaultState = {
    inputValue:'',
    list:[]
}

//reducer 可以接受state，但是绝对并不能修改state
export default (state = defaultState,action) =>{  //state 整个数据
    //console.log(state,action)
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
        return newState;//返回给store
    }
    if(action.type === DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;//返回给store
    }
    return state
}
const defaultState = {
    inputValue:'123',
    list:[1,2]
}

//reducer 可以接受state，但是绝对并不能修改state
export default (state = defaultState,action) =>{  //state 整个数据
    //console.log(state,action)
    if (action.type==='change_input_value'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        //对数据进行返回
        return newState;//返回给store
    }
    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue) ;
        newState.inputValue = '';
        return newState;//返回给store
    }
    return state
}
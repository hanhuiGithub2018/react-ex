const defaultState = {
  inputValue:'',
  list:['HanHui','LuoYa']
};

export default (state = defaultState,action)=>{
    if(action.type === "change_input_value"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;

        // console.log(state,action);
        return newState
    }
    if(action.type === "add_list_item"){
        let newState = JSON.parse(JSON.stringify(state));
        if(action.value === ""){
            newState.list = state.list
        }else {
            newState.list.push(action.value);
        }
        newState.inputValue = '';

        // console.log(state,action,newState);
        return newState
    }
    if(action.type === "delete_list_item"){
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.value,1);

        // console.log(state,action,newState);
        return newState
    }

    // console.log(state,action);
    return state;
}

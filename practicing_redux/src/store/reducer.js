const intialState ={
    counter:0
}

const reducer = (state= intialState, action)=>{
    console.log('reducer',action);
    if(action.type === 'INC_COUNTER'){
        return {
            counter: state.counter+1
        }
    }
    if(action.type === 'DEC_COUNTER'){
        return {
            counter: state.counter-1
        }
    }
    if(action.type === 'ADD_TO_COUNTER'){
        return {
            counter: state.counter+5
        }
    }
    if(action.type === 'SUBTRACT_FROM_COUNTER'){
        return {
            counter: state.counter-5
        }
    }

    return state;
}


export default reducer;
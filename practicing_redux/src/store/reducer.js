const intialState = {
    counter: 0,
    results: [],
}

const reducer = (state = intialState, action) => {
    console.log('reducer', action);

    switch (action.type) {
        case ('INC_COUNTER'):
            return {
                ...state,
                counter: state.counter + 1
            }

        case ('DEC_COUNTER'):
            return {
                ...state,
                counter: state.counter - 1
            }

        case ('ADD_TO_COUNTER'):
            return {
                ...state,
                counter: state.counter + action.value
            }

        case ('SUBTRACT_FROM_COUNTER'):
            return {
                ...state,
                counter: state.counter - action.value
            }
        case ('STORE_RESULT'):
            return {
                ...state,
                results: state.results.concat(
                    { id: (new Date()).getTime().toString(), value: state.counter}
                )
            }
            case ('DELETE_RESULT'):
                return {
                    ...state,
                    results: state.results.filter(
                        (result)=> result.id !== action.resultId
                    )
                }    
        default:
            return state;
    }
}


export default reducer;
import * as actionTypes from '../actions'

const intialState = {
    results: [],
}

const results = (state = intialState, action) => {
    console.log('results', action);

    switch (action.type) {
        case (actionTypes.STORE_RESULT):
            return {
                ...state,
                results: state.results.concat(
                    { id: (new Date()).getTime().toString(), value: action.counter}
                )
            }
            case (actionTypes.DELETE_RESULT):
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


export default results;
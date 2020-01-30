import * as actionTypes from '../actions'

const intialState = {
    counter: 0,
}

const counter = (state = intialState, action) => {
    console.log('counter', action);

    switch (action.type) {
        case (actionTypes.INC_COUNTER):
            return {
                ...state,
                counter: state.counter + 1
            }

        case (actionTypes.DEC_COUNTER):
            return {
                ...state,
                counter: state.counter - 1
            }

        case (actionTypes.ADD_TO_COUNTER):
            return {
                ...state,
                counter: state.counter + action.value
            }

        case (actionTypes.SUBTRACT_FROM_COUNTER):
            return {
                ...state,
                counter: state.counter - action.value
            }
       default:
            return state;
    }
}


export default counter;
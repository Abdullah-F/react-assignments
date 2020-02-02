import * as actionTypes from './actions'
export const increment = ()=>{
    return {
        type: actionTypes.INC_COUNTER
    }    
}

export const decrement = ()=>{
    return {
        type: actionTypes.DEC_COUNTER
    }    
}

export const addToCounter = (value)=>{
    return {
        type: actionTypes.ADD_TO_COUNTER,
        value: value
    }    
}

export const subrractFromCounter = (value)=>{
    return {
        type: actionTypes.SUBTRACT_FROM_COUNTER,
        value: value
    }    
}

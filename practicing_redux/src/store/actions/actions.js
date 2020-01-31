export const INC_COUNTER = 'INC_COUNTER'
export const DEC_COUNTER = 'DEC_COUNTER'
export const ADD_TO_COUNTER = 'ADD_TO_COUNTER'
export const SUBTRACT_FROM_COUNTER = 'SUBTRACT_FROM_COUNTER'
export const STORE_RESULT = 'STORE_RESULT'
export const DELETE_RESULT = 'DELETE_RESULT'

export const increment = ()=>{
    return {
        type: INC_COUNTER
    }    
}

export const decrement = ()=>{
    return {
        type: DEC_COUNTER
    }    
}

export const addToCounter = (value)=>{
    return {
        type: ADD_TO_COUNTER,
        value: value
    }    
}

export const subrractFromCounter = (value)=>{
    return {
        type: SUBTRACT_FROM_COUNTER,
        value: value
    }    
}

const saveResult = (counter)=>{
    return {
        type: STORE_RESULT,
        counter: counter
    }    
}

export const storeResult = (counter)=>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(saveResult(counter));
        }, 5000)
    }
}
export const deleteResult = (reusltId)=>{
    return {
        type: DELETE_RESULT,
        reusltId: reusltId,
    }    
}
import * as actionTypes from './actions'

const saveResult = (counter, oldState)=>{
    console.log('[SAVE RESULT] old state', oldState);
    return {
        type: actionTypes.STORE_RESULT,
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
export const deleteResult = (resultId)=>{
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId,
    }    
}
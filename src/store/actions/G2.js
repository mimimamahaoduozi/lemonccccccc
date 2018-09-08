import * as types from '../action-types'

export const addFormData = (val)=>{
    console.log('状态改变了');
    return{
        type:types.ADD_FORM_DATA,
        val
    }
};

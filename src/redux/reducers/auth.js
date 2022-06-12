import * as t from '../types'

export const auth = (state={user:{}},action)=>{
    switch (action.type){
        case t.SIGN_UP: return {...state}    
        default: return {...state}
    }
}
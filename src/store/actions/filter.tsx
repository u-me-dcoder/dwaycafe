//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405

//import axios from 'axios'
import {  SET_FILTER,RESET_FILTER ,SET_TEXT_FILTER} from "../types";
import {ThunkAction,ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'

export const setFilter = (filter:Object):ThunkAction<Promise<void>,{},{},AnyAction> =>async (dispatch:ThunkDispatch<{},{},AnyAction>):Promise<void>=>{
    try {
        dispatch({
            type:SET_FILTER,
            payload:filter
          })
    } catch (error) {
        console.log(error)
    }
}
export const setTextFilter = (text:String):ThunkAction<Promise<void>,{},{},AnyAction> =>async (dispatch:ThunkDispatch<{},{},AnyAction>):Promise<void>=>{
    try {
        dispatch({
            type:SET_TEXT_FILTER,
            payload:text
          })
    } catch (error) {
        console.log(error)
    }
}

export const resetFilter = ():ThunkAction<Promise<void>,{},{},AnyAction> =>async (dispatch:ThunkDispatch<{},{},AnyAction>):Promise<void>=>{
    try {
        dispatch({
            type:RESET_FILTER,
          })
    } catch (error) {
        console.log(error)
    }
}




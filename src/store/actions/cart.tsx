//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405

//import axios from 'axios'
import {  ADD_TO_CART, GET_CART_LIST, REMOVE_FROM_CART } from "../types";
import {ThunkAction,ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'

export const addToCart = (item:Object):ThunkAction<Promise<void>,{},{},AnyAction> =>async (dispatch:ThunkDispatch<{},{},AnyAction>):Promise<void>=>{
    try {
        dispatch({
            type:ADD_TO_CART,
            payload:item
          })
    } catch (error) {
        console.log(error)
    }
}


export const getCartList = () =>async (dispatch)=>{
    
    try {
        dispatch({
            type:GET_CART_LIST,
           
          })
    } catch (error) {
        console.log(error)
    }
}



export const removeFromCart = (items:Array<String>) =>async (dispatch)=>{
    
    try {
        dispatch({
            type:REMOVE_FROM_CART,
            payload:items
          })
    } catch (error) {
        console.log(error)
    }
}



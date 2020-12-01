//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405

//import axios from 'axios'
import {  ADD_TO_CART, GET_CART_LIST, REMOVE_FROM_CART } from "../types";


export const addToCart = (item) =>async (dispatch)=>{
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



export const removeFromCart = (items) =>async (dispatch)=>{
    
    try {
        dispatch({
            type:REMOVE_FROM_CART,
            payload:items
          })
    } catch (error) {
        console.log(error)
    }
}



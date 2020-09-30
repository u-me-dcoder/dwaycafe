//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405


import { GET_PRODUCT_LIST, ADD_TO_CART, REMOVE_FROM_CART } from "../types";
import {Product} from '../../types'
import {ThunkAction} from 'redux-thunk'
import {AnyAction} from 'redux'



//define action interface

export interface GetProductList {
  type:typeof GET_PRODUCT_LIST;
  payload:[Product];
}

export interface AddToCart{
  type:ADD_TO_CART;
  payload:string
}

export interface RemoveFromCart{
  type:REMOVE_FROM_CART;
  payload:string
}

export type Action = GetProductList | AddToCart | RemoveFromCart

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  {},
  unknown,
  AnyAction
>

//action creators

export const getData = (products:[Product]):GetProductList =>{
  return {type:GET_PRODUCT_LIST,payload:products}
}
export const addItem = (id:string):AddToCart =>{
  return {type:ADD_TO_CART,payload:id}
}
export const removeItem = (id:string):RemoveFromCart =>{
  return {type:REMOVE_FROM_CART,payload:id}
}





export const getCategoryList = (products:[Product]):AppThunk => async (dispatch) => {
  try {
    dispatch(getData(products));
  } catch (error) {
    console.log(error);
  }
};


export const addToCart = (id:string):ThunkAction<void,{},{},AnyAction> => async (dispatch) => {
  try {
    dispatch(addItem(id));
  } catch (error) {
    console.log(error);
  }
};
export const removeFromCart = (id:string):AppThunk => async (dispatch) => {
  try {
    dispatch(removeItem(id));
  } catch (error) {
    console.log(error);
  }
};
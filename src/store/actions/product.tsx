//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405

import axios from 'axios'
import { GET_PRODUCT_LIST,GET_PRODUCT_DETAIL, GET_CATEGORY_PRODUCT } from "../types";


export const getProductList = ()=>async (dispatch)=>{
 
  try {
  
    axios.get(`${process.env.REACT_APP_CAFE_ENDPOINT}`).then(res=>{
      dispatch({
        type:GET_PRODUCT_LIST,
        payload:res.data
      })
    })
      
  } catch (error) {
    console.log(error)
  }
}


export const getCategoryProduct = (id)=>async (dispatch)=>{

  try {
    axios.get(`${process.env.REACT_APP_CAFE_ENDPOINT}/${id}`).then(res=>{
      dispatch({
        type:GET_CATEGORY_PRODUCT,
        payload:res.data
      })
    })
      
  } catch (error) {
    console.log(error)
  }
}

export const getProductDetail = (id)=>async (dispatch)=>{
  
  try {
    axios.get(`${process.env.REACT_APP_CAFE_ENDPOINT}/product/${id}`).then(res=>{
      dispatch({
        type:GET_PRODUCT_DETAIL,
        payload:res.data
      })
    })
      
  } catch (error) {
    console.log(error)
  }
}




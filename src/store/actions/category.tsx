//https://redux.js.org/recipes/usage-with-typescript
//https://medium.com/@peatiscoding/typescripts-with-redux-redux-thunk-recipe-fcce4ffca405

import axios from 'axios'
import { GET_CATEGORY_LIST } from "../types";


export const getCategory = ()=>async (dispatch)=>{
  
  let endpoint = process.env.REACT_APP_CATEGORY_ENDPOINT

  try {
    axios.get(`${endpoint}`).then(res=>{
      dispatch({
        type:GET_CATEGORY_LIST,
        payload:res.data
      })
    })
      
  } catch (error) {
    console.log(error)
  }
}




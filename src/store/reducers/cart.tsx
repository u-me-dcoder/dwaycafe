import { ADD_TO_CART, GET_CART_LIST } from "../types";









const initialState = {
  products:[],
  
  loading:true
};




export default function (state= initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
   
    case ADD_TO_CART:
        {
         
           state.products.map(item=> item._id===payload._id ?  item.quantity = payload.quantity : true)
    
          return{
            ...state,
            products:state.products.filter(item=>item._id===payload._id).length > 0 ? state.products : [...state.products,payload],
            loading:false
          }
          
         
          
        }

    case GET_CART_LIST:
      return {...state,loading:false}
   
    default:
      return state;
  }
}

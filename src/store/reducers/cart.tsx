import { ADD_TO_CART } from "../types";









const initialState = {
  products:[],
  
  loading:true
};




export default function (state= initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
   
    case ADD_TO_CART:
        {
          let newItem = state.products.map(item=>{
            if(item._id===payload._id){
              let cartItem = {...item,quantity:payload.quantity}
              return cartItem
            }
            return {...item,...payload}
          })
          console.log(newItem)
          return {...state,products:[...state.products,payload],loading:false}
        }
   
    default:
      return state;
  }
}

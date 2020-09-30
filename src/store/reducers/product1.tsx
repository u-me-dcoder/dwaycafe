import { GET_PRODUCT_LIST, ADD_TO_CART, REMOVE_FROM_CART } from "../types";
import { v4 as uuidv4 } from 'uuid';


interface Product {
  id:()=>string;
  title:string;
  category:string;
  amount:number;
}

interface MyStore{
  products:Array<Product>;
  cart:Array<Product>
}

const initialState = {
  products: [
    { id: uuidv4(), title: "Buy 2 Get 1 Free", category: "Bag", "amount": 2000 },
    { id: uuidv4(), title: "Buy 2 Get 1 Free", category: "shoes", "amount": 2000 },
    { id: uuidv4(), title: "Buy 2 Get 1 Free", category: "shoes", "amount": 2000 },
  ],
  cart:[]
};




export default function (state:MyStore = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case GET_PRODUCT_LIST:
      return { ...state, products: payload };
    case ADD_TO_CART:
      let cartItem = state.products.find(item=>item.id===payload)
    return {...state,cart:[...state.cart,cartItem]};
    case REMOVE_FROM_CART:
      let cartArray = state.cart.filter(item=>item.id!==payload)
      return {...state,cart:cartArray}
      

    default:
      return state;
  }
}

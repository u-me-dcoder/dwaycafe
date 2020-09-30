import { GET_CATEGORY_LIST } from "../types";



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
  items:null,
  loading:true
};




export default function (state= initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case GET_CATEGORY_LIST:
      return { ...state, items: payload ,loading:false};
    
    default:
      return state;
  }
}

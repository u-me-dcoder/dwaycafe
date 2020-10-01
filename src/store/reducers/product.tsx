import {  GET_CATEGORY_PRODUCT, GET_PRODUCT_DETAIL } from "../types";



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
  item:null,
  loading:true,
};




export default function (state = initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
    case GET_CATEGORY_PRODUCT:
      return { ...state,items:payload,loading:false}
    case GET_PRODUCT_DETAIL:
      return {...state,item:payload,loading:false}
      
    default:
      return state;
  }
}

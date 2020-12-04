import { SET_FILTER,RESET_FILTER, SET_TEXT_FILTER } from "../types";

const initialState = {
  text:'',
  minimum:0,
  maximum:undefined,
  status:true,
  loading:true
};

export default function (state= initialState, action) {
  const { type, payload } = action;
  
  switch (type) {
   
    case SET_FILTER:
      return state
    case SET_TEXT_FILTER:
      return{...state,text:payload}
    case RESET_FILTER:  
      return state
    default:
      return state;
  }
}

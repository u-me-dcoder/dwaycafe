import { combineReducers } from "redux";

import category from './category'
import product from './product'
import cart from './cart'

export default combineReducers({
  category,
  product,
  cart
});

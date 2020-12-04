import { combineReducers } from "redux";

import category from './category'
import product from './product'
import cart from './cart'
import filter from './filter'

export default combineReducers({
  category,
  product,
  cart,
  filter
});

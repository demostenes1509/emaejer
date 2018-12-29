import { combineReducers } from 'redux';
import counterReducer from './Counter';
import productReducer from './Products';

const rootReducers = combineReducers({
  counter: counterReducer,
  products: productReducer
});

export default rootReducers;
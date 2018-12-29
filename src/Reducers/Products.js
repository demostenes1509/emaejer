import { ProductActionTypes } from '../Actions/Products'

const initialState = {
  products: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return { products: state.products.concat(action.product) }
    default:
      return state;
  }
}
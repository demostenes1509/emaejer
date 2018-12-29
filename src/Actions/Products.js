export const ProductActionTypes = {
  ADD_PRODUCT: 'ADD_PRODUCT'
}

const AddProduct = product => ({ type: ProductActionTypes.ADD_PRODUCT, product })

export default {
  AddProduct
}
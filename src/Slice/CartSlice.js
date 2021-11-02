import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      const index = state.cartItems.findIndex((x) => x.id === newItem.id)
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity
      } else {
        state.cartItems.push(newItem)
      }
      // localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    inCreaseQuantity(state, action) {
      const id = action.payload.id
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cartItems[index].quantity += 1
      }
    },
    deCreaseQuantity(state, action) {
      const id = action.payload.id
      const index = state.cartItems.findIndex((x) => x.id === id)
      if (index >= 0) {
        state.cartItems[index].quantity -= 1
      }
    },
    setTotalPrice(state, action) {
      if (state.cartItems.length !== 0) {
        state.totalPrice = state.cartItems.reduce(
          (total, item) => total + item.product.mainPrice * item.quantity,
          0
        )
      }
    },
    removeItemCart(state, action) {
      const id = action.payload
      const index = state.cartItems.findIndex((item) => item.id === id)
      state.cartItems.splice(index, 1)
    },
  },
})

export const { reducer, actions } = CartSlice
export const {
  addToCart,
  removeItemCart,
  inCreaseQuantity,
  deCreaseQuantity,
  setTotalPrice,
} = actions
export default reducer

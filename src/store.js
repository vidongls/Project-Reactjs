import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import LoginSlice from './Slice/LoginSlice'
import SortSlice from './Slice/ProductSortSlice'
import RegisterSlice from './Slice/RegisterSlice'

const rootReducer = {
  sort: SortSlice,
  cart: CartSlice,
  register: RegisterSlice,
  login: LoginSlice,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store

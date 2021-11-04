import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './Slice/CartSlice'
import LoginSlice from './Slice/LoginSlice'
import SearchSlice from './Slice/ProductSearchSlice'
import SortSlice from './Slice/ProductSortSlice'
import RegisterSlice from './Slice/RegisterSlice'

const rootReducer = {
  sort: SortSlice,
  cart: CartSlice,
  register: RegisterSlice,
  login: LoginSlice,
  search: SearchSlice,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store

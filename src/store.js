import { configureStore } from '@reduxjs/toolkit'
import SortSlice from './Slice/ProductSortSlice'

const rootReducer = {
  sort: SortSlice,
}
const store = configureStore({
  reducer: rootReducer,
})

export default store

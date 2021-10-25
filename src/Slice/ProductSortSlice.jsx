import { createSlice } from '@reduxjs/toolkit'

export const SortSlice = createSlice({
  name: 'Sort',
  initialState: {
    data: 'All',
  },
  reducers: {
    sortData: (state, action) => {
      state.data = action.payload
    },
  },
})

export const { sortData } = SortSlice.actions

export default SortSlice.reducer

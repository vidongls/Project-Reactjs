import { createSlice } from '@reduxjs/toolkit'

export const SortSlice = createSlice({
  name: 'Sort',
  initialState: {
    data: 'All',
    dataTopSeller: 'All',
  },
  reducers: {
    sortData: (state, action) => {
      state.data = action.payload
    },
    sortTopSeller: (state, action) => {
      state.dataTopSeller = action.payload
    },
  },
})

export const { sortData, sortTopSeller } = SortSlice.actions

export default SortSlice.reducer

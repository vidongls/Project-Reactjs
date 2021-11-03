import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const LoginAction = createAsyncThunk('users/login', async (payload) => {
  const response = await fetch(
    'https://ecomerces-7cb8c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json'
  )

  const dataRaw = await response.json()
  let userData = Object.assign([], Object.values(dataRaw))

  let user = userData.filter((check) => {
    return (
      check.userName === payload.userName && check.password === payload.password
    )
  })

  if (user.length !== 0) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  return user
})
const LoginSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: JSON.parse(localStorage.getItem('user')) || {},
  },
  extraReducers: {
    [LoginAction.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export default LoginSlice.reducer

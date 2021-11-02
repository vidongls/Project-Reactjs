import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const RegisterAction = createAsyncThunk(
  'users/register',
  async (payload) => {
    await fetch(
      'https://ecomerces-7cb8c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const response = await fetch(
      `https://ecomerces-7cb8c-default-rtdb.asia-southeast1.firebasedatabase.app/users.json?orderBy="userName"&equalTo="${payload.userName}"`
    )
    const dataRaw = await response.json()
    let userData = Object.assign([], Object.values(dataRaw))
    console.log(userData)

    localStorage.setItem('user', JSON.stringify(userData))

    return userData
  }
)
const RegisterSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
  },
  extraReducers: {
    [RegisterAction.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export default RegisterSlice.reducer

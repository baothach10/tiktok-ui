import { createSlice } from '@reduxjs/toolkit'

const initialState = await fetch('http://localhost:4000/api/users').then(res => res.json());

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.usersList.push(action.payload)
    }
  }
})



export default usersSlice.reducer
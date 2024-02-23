import { createSlice } from '@reduxjs/toolkit'

import { userAPI } from 'src/services/userAPI';


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    usersList: await userAPI(),
  },
  reducers: {
    add: (state, action) => {
      state.usersList.push(action.payload)
    }
  }
})


export const selectUserByNickname = (state, nickname) => state.users.usersList.find(user => user.nickname === nickname);


export default usersSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = await fetch('http://localhost:4000/api/users').then(res => res.json());

// const testing = await fetch(process.env.REACT_APP_DB_URL_HEADER+'api/users', {
//   method: 'POST',
//   // headers: {'Content-Type':'application/json'},
//   body: {
//     name: 'Google'
//   }
// })

// console.log(testing)


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


export const selectUserByNickname = (state, nickname) => state.users.usersList.find(user => user.nickname === nickname);


export default usersSlice.reducer
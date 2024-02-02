import { createSlice } from '@reduxjs/toolkit'

const initialState = await fetch('http://localhost:4000/api/posts').then(res => res.json());

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsList: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.postsList.push(action.payload)
    }
  }
})



export default postsSlice.reducer
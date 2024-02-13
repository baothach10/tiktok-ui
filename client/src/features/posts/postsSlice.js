import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = await fetch('http://localhost:4000/api/posts').then(res => res.json());

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsList: initialState,
  },
  reducers: {
      add: {
        reducer(state, action) {
        state.posts.postsList.push(action.payload)
      },
      prepare(title, music, video, userID) {
        return {
          payload: {
            id: nanoid(),
            title,
            music,
            video,
            userID,
            date: new Date().toISOString(),
          }
        }
      }
    }
  }
})

export const selectAllPosts = (state) => state.posts.postsList;
export const selectPostsById = (state, userID) => state.posts.postsList.filter((post) => post.userID === userID)
export default postsSlice.reducer
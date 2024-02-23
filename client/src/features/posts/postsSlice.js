import { createSlice, nanoid } from '@reduxjs/toolkit'
import axios from 'axios';
import { postAPI } from 'src/services/postAPI';

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    postsList: await postAPI(),
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
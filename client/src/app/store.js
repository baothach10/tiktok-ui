import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import usersReducer from '../features/users/usersSlice'
import postsReducer from '../features/posts/postsSlice'
import playlistsReducer from '../features/playlists/playlistsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducer,
    posts: postsReducer,
    playlists: playlistsReducer,
  },
})
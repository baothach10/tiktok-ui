import { createSlice } from '@reduxjs/toolkit'

const initialState = await fetch('http://localhost:4000/api/playlists').then(res => res.json());

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistsList: initialState,
  },
  reducers: {
    add: (state, action) => {
      state.playlistsList.push(action.payload)
    }
  }
})



export default playlistsSlice.reducer
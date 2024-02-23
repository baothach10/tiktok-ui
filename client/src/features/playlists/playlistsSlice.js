import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { playlistAPI } from 'src/services/userAPI';

const initialState = {
  playlist: await playlistAPI()
};

export const playlistsSlice = createSlice({
  name: 'playlists',
  initialState: {
    playlistsList: initialState.playlist,
  },
  reducers: {
    add: (state, action) => {
      state.playlistsList.push(action.payload)
    }
  }
})

export const selectPlaylistsById = (state, userID) => state.playlists.playlistsList.filter((playlist) => playlist.userID === userID)

export default playlistsSlice.reducer
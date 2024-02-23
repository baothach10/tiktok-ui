import axios from "axios";

export async function playlistAPI() {
    const playlists = await axios.get(process.env.REACT_APP_DB_URL_HEADER + 'api/playlists');
    return playlists
}

export async function userAPI() {
    return await axios.get(process.env.REACT_APP_DB_URL_HEADER + 'api/users');
}

export async function suggestedAccountAPI(nickname) {
    return await axios.post(process.env.REACT_APP_DB_URL_HEADER + 'api/suggested', {
        params: {
            nickname: nickname
        }
    });
}

export async function profileAPI(nickname) {
    return await axios.post(process.env.REACT_APP_DB_URL_HEADER + 'api/profile',
        {
            params:
            {
                nickname: nickname
            }
        })
}

export async function followingAccountAPI(nickname) {

}
import axios from "axios";

export async function postAPI() {
    return await axios.get(process.env.REACT_APP_DB_URL_HEADER+'api/posts');
}
import axios from "axios";
import LINK from "./Link";
export default async function AddPost(body, token) {
    const headers = {
        headers: {
            Authorization: token
        }
    }
    try {
        const response = await axios.post(LINK + "/api/v1/post", body, headers);
        return response;
    } catch (error) {
        return null;
    }

}
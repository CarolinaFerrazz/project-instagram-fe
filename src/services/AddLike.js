import axios from "axios";
import LINK from "./Link";
export default async function AddLike(body, token) {
    const headers = {
        headers: {
            Authorization: token
        }
    }
    try {
        const response = await axios.post(LINK + "/api/v1/like/post", body, headers);
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
        return null;
    }

}

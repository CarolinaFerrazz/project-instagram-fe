import axios from "axios";
import LINK from "./Link";

export default async function GetPostById(id, token) {
    try {
        const post = await axios.get(LINK + `/api/v1/post/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return post;
    } catch (error) {
        return null;
    }
}

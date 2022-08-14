import axios from "axios";
import LINK from "./link";
export default async function GetPostFromUserIsFollowing(token) {


    try {
        const response = await axios.get(LINK + "/api/v1/post/following", {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        return null
    }


}

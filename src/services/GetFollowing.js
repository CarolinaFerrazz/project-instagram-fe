import axios from "axios";
import LINK from "./Link";

export default async function GetFollowing(id, token) {
    try {
        const users = await axios.get(LINK + `/api/v1/follower/follows/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return users.data;
    } catch (error) {
        console.log(error.message);
        return null;
    }
}
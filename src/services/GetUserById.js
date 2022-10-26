import axios from "axios";
import LINK from "./Links";
export default async function GetUserById(id, token) {
    try {
        const response = await axios.get(LINK + `/api/v1/user/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        return null
    }
}
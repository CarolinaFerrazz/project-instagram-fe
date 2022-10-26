import axios from "axios";
import LINK from "./Links";
export default async function GetUser(token) {
    try {
        const response = await axios.get(LINK + "/api/v1/user", {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        return null
    }
}

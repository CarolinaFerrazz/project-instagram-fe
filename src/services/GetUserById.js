import axios from "axios";
import LINK from "./Link";

export default async function GetUserById(id, token) {
    console.log(id)
    console.log(token)
    try {
        const response = await axios.get(`/api/v1/user/${id}`, {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        return null
    }
}
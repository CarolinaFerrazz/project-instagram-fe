import axios from "axios";
export default async function GetUserById(id, token) {
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
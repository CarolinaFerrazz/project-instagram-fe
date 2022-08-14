import axios from "axios";

export default async function GetUser(token) {
    try {
        const response = await axios.get("/api/v1/user", {
            headers: {
                Authorization: token
            }
        });
        return response;
    } catch (error) {
        return null
    }
}

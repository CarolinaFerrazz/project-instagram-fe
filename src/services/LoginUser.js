import axios from "axios";
import LINK from "./Link";

export default async function LoginUser(credentials) {
    try {
        const response = await axios.post(LINK + "/login", credentials);
        const token = response.headers.authorization
        localStorage.setItem('token', token);
        return token;
    } catch (error) {
        return error;
    }
}
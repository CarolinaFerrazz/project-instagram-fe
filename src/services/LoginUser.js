import axios from "axios";

export default async function LoginUser(credentials) {
    const response = await axios.post("/login", credentials);
    const token = response.headers.authorization
    localStorage.setItem('token', token);
    return token;
}
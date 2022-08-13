import axios from "axios";
export default async function RegisterUser(userToRegister) {
    try {
        const response = await axios.post("/api/v1/user", userToRegister);
        return response;
    } catch (error) {
        return null;
    }
}

import axios from "axios";
import LINK from "./Link";

export default async function RemoveLike(body, token) {
    try {
        const response = await axios.delete(LINK + '/api/v1/like/post', {
            headers: {
                Authorization: token
            },
            data: body
        });
        console.log(response)
        return response;
    } catch (error) {
        console.log(error)
        return null;
    }


}

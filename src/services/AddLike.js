import axios from "axios";
import LINK from "./Links";
export default async function AddLike(body, token) {
	const headers = {
		headers: {
			Authorization: token,
		},
	};
	try {
		const response = await axios.post(
			LINK + "/api/v1/like/post",
			body,
			headers
		);
		return response;
	} catch (error) {
		return null;
	}
}

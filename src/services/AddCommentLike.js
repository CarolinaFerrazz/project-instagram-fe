import axios from "axios";
import LINK from "./Links";
export default async function AddCommentLike(body, token) {
	const headers = {
		headers: {
			Authorization: token,
		},
	};
	try {
		const response = await axios.post(
			LINK + "/api/v1/like/comment",
			body,
			headers
		);
		return response;
	} catch (error) {
		return null;
	}
}

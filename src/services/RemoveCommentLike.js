import axios from "axios";
import LINK from "./Links";

export default async function RemoveCommentLike(body, token) {
	try {
		const response = await axios.delete(LINK + "/api/v1/like/comment", {
			headers: {
				Authorization: token,
			},
			data: body,
		});
		return response;
	} catch (error) {
		return null;
	}
}

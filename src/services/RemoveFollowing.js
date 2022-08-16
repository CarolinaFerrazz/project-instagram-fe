import axios from "axios";
import LINK from "./Links";

export default async function RemoveFollowing(body, token) {
	const headers = {
		headers: {
			Authorization: token,
		},
	};
	try {
		const data = await axios.patch(
			`${LINK}/api/v1/user/unfollow`,
			body,
			headers
		);
		return data;
	} catch (error) {
		return null;
	}
}

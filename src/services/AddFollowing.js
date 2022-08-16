import axios from "axios";
import LINK from "./Links";

export default async function AddFollowing(body, token) {
	const headers = {
		headers: {
			Authorization: token,
		},
	};
	try {
		const data = await axios.patch(`${LINK}/api/v1/user/follow`, body, headers);
		return data;
	} catch (error) {
		return null;
	}
}

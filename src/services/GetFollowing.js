import axios from "axios";
import LINK from "./Links";

export default async function GetFollowing(id, token) {
	try {
		const users = await axios.get(LINK + `/api/v1/follower/follows/${id}`, {
			headers: {
				Authorization: token,
			},
		});
		return users.data;
	} catch (error) {
		return null;
	}
}

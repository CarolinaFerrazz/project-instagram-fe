import axios from "axios";
import LINK from "./Links";

export default async function GetFollowers(id, token) {
	try {
		const users = await axios.get(LINK + `/api/v1/follower/followers/${id}`, {
			headers: {
				Authorization: token,
			},
		});
		return users.data;
	} catch (error) {
		return null;
	}
}

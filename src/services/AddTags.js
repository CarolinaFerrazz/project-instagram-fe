import axios from "axios";
import LINK from "./Links";
export default async function AddTags(body, token) {
	const headers = {
		headers: {
			Authorization: token,
		},
	};
	try {
		const response = await axios.post(LINK + "/api/v1/tag", body, headers);
		return response;
	} catch (error) {
		return error;
	}
}

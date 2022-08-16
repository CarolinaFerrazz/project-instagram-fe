import axios from "axios";
import LINK from "./Links";

export default async function GetUserByName(name, token) {
	try {
		const response = await axios.get(
			LINK + `/api/v1/user/search?username=${name}`,
			{
				headers: {
					Authorization: token,
				},
			}
		);
		return response;
	} catch (error) {
		return null;
	}
}

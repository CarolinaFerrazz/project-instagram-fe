import axios from "axios";
import LINK from "./Links";

export default async function GetPostsByTag(tag, token) {
	try {
		const post = await axios.get(
			LINK + `/api/v1/post/search/tag?tag=%23${tag}`,
			{
				headers: {
					Authorization: token,
				},
			}
		);
		return post;
	} catch (error) {
		return null;
	}
}

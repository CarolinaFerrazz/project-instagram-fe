import { Container, ButtonAddPost, IconNoPosts, TitleNoPosts } from "./styles";
import NoPost from "../../assets/noPostsYet.svg";

const NoPostsYet = () => {
	return (
		<>
			<Container>
				<ButtonAddPost>
					<IconNoPosts src={NoPost} alt="icon"></IconNoPosts>
				</ButtonAddPost>
				<TitleNoPosts>No posts</TitleNoPosts>
			</Container>
		</>
	);
};

export default NoPostsYet;

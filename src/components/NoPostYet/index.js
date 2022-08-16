import {
	Container,
	ButtonAddPost,
	IconNoPosts,
	TitleNoPosts,
	LinkButton,
	TextCreatePost,
} from "./styles";
import NoPost from "../../assets/noPostsYet.svg";

const NoPostsYet = () => {
	return (
		<>
			<Container>
				<ButtonAddPost>
					<LinkButton to="/createpost">
						<IconNoPosts src={NoPost} alt="icon"></IconNoPosts>
					</LinkButton>
				</ButtonAddPost>
				<TitleNoPosts>No posts yet</TitleNoPosts>
				<TextCreatePost>
					Add a post by loading on top of the image
				</TextCreatePost>
			</Container>
		</>
	);
};

export default NoPostsYet;

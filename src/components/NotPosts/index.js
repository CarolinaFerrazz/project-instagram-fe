import { AlignAllCenter, Container, IconNoPosts, TitleNoPosts } from "./styles";
import IconPosts from "../../assets/noPosts.svg";

const NoPosts = () => {
	return (
		<>
			<AlignAllCenter>
				<Container>
					<IconNoPosts src={IconPosts} />
					<TitleNoPosts>Follow more people to see your posts</TitleNoPosts>
				</Container>
			</AlignAllCenter>
		</>
	);
};

export default NoPosts;

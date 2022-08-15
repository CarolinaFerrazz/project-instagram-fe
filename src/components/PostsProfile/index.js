import { AlignAllCenter, Container, ContainerPost } from "./styles.js";
import ProfilePP from "../../assets/profile.jpg";

const PostsProfile = (props) => {
  const { list } = props;

  return (
    <>
      <AlignAllCenter>
        <Container>
          {list.map(post => <ContainerPost src={post.photo} key={post.id} />)}
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsProfile;

import { AlignAllCenter, Container, ContainerPost } from "./styles.js";
import ProfilePP from "../../assets/profile.jpg";

const PostsProfile = () => {
  return (
    <>
      <AlignAllCenter>
        <Container>
          <ContainerPost src={ProfilePP} />
          <ContainerPost src={ProfilePP} />
          <ContainerPost src={ProfilePP} />
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsProfile;

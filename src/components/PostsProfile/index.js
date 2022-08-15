import { AlignAllCenter, Container, ContainerPost } from "./styles.js";
import ProfilePP from "../../assets/profile.jpg";
import useAuth from "../../hooks/useAuth.js";

const PostsProfile = (props) => {
  const { list, showMoreHandler, handleLikeClicked } = props;
  console.log(list)

  return (
    <>
      <AlignAllCenter>
        <Container>
          {list.map(post =>
            <ContainerPost
              onClick={() =>
                showMoreHandler(
                  post.id
                )}
              src={post.photo}
              key={post.id} />)}
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsProfile;

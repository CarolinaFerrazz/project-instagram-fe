import { AlignAllCenter, Container, ContainerPost } from "./styles.js";

const PostsProfile = (props) => {
  const { list, showMoreHandler } = props;
  return (
    <>
      <AlignAllCenter>
        <Container>
          {list
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <ContainerPost
                onClick={() => showMoreHandler(post.id)}
                src={post.photo}
                key={post.id}
              />
            ))}
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsProfile;

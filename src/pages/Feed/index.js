import {
  Container,
  ContainerIcon,
  ButtonAddPost,
  LinkAddPost,
  IconAdd,
} from "./styles";
import Header from "../../components/Header";
import PostsFeed from "../../components/PostsFeed";
import { useEffect, useState } from "react";
import GetPostFromUserIsFollowing from "../../services/GetPostFromUserIsFollowing";
import useAuth from "../../hooks/useAuth";
import IconAddPost from "../../assets/addImage.svg";
import MorePosts from "../../components/MorePosts";
import NoPosts from "../../components/NotPosts";

const Feed = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [postId, setPostId] = useState("");
  // eslint-disable-next-line
  const [numLikes, setNumLikes] = useState("");
  const [likeClicked, setLikeClicked] = useState(false);
  // eslint-disable-next-line
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClicked() {
    setLikeClicked(!likeClicked);
  }

  useEffect(() => {
    async function getPosts() {
      const data = await GetPostFromUserIsFollowing(auth.token);
      setPosts(data.data);
    }
    getPosts();
    // eslint-disable-next-line
  }, [likeClicked]);

  function showMoreHandler(id, numLikes, isLiked) {
    if (!showMore) {
      setPostId(id);
      setNumLikes(numLikes);
      setShowMore(!showMore);
      setIsLiked(isLiked);
    } else {
      setPostId("");
      setShowMore(!showMore);
      setNumLikes("");
      setIsLiked(false);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerIcon>
          <ButtonAddPost>
            <LinkAddPost to="/createpost">
              {!showMore ? <IconAdd src={IconAddPost} /> : null}
            </LinkAddPost>
          </ButtonAddPost>
        </ContainerIcon>
        {posts.length === 0 ? <NoPosts /> : null}
        {showMore ? (
          <MorePosts
            postId={postId}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked}
          />
        ) : (
          posts
            .sort((a, b) => b.id - a.id)
            .map((post) => {
              return (
                <PostsFeed
                  user={post?.userId}
                  postId={post.id}
                  photo={post.photo}
                  commentList={post.commentList}
                  description={post.description}
                  creationDate={post.creationDate}
                  numLikes={post?.postUserLikeList.length}
                  tagList={post?.tagList}
                  name={post?.userId?.name}
                  like={post?.postUserLikeList.some(
                    (like) => like.userId === auth.id
                  )}
                  key={post.id}
                  showMoreHandler={showMoreHandler}
                  handleLikeClicked={handleLikeClicked}
                />
              );
            })
        )}
      </Container>
    </>
  );
};

export default Feed;

import { ContainerIcon, IconAdd } from "./styles";
import Header from "../../components/Header";
import PostsFeed from "../../components/PostsFeed";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import GetPostFromUserIsFollowing from "../../services/GetPostFromUserIsFollowing";
import useAuth from "../../hooks/useAuth";
import IconAddPost from "../../assets/addImage.svg";
import MorePosts from "../../components/MorePosts";

const Feed = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [postId, setPostId] = useState("");
  const [numLikes, setNumLikes] = useState("");
  const [likeClicked, setLikeClicked] = useState(false);

  function handleLikeClicked() {
    setLikeClicked(!likeClicked);
  }


  useEffect(() => {
    async function getPosts() {
      const data = await GetPostFromUserIsFollowing(auth.token);

      setPosts(data.data);
      console.log(data.data);
    }
    getPosts();
  }, [likeClicked]);










  function showMoreHandler(id, numLikes) {
    if (!showMore) {
      setPostId(id);
      setNumLikes(numLikes)
      setShowMore(!showMore);
    } else {
      setPostId("");
      setShowMore(!showMore);
      setNumLikes("");
    }
  }


  console.log(auth);
  return (
    <>
      <Header />
      <ContainerIcon>
        {/* BOTAO PARA AIDIONAR POSTS  */}

      </ContainerIcon>
      {!showMore ? <IconAdd src={IconAddPost} /> : null}
      {showMore ? <MorePosts postId={postId} showMoreHandler={showMoreHandler} likes={numLikes} /> :
        posts.map((post) => {
          return <PostsFeed
            postId={post.id}
            photo={post.photo}
            commentList={post.commentList}
            description={post.description}
            creationDate={post.creationDate}
            numLikes={post?.postUserLikeList.length}
            tagList={post?.tagList}
            name={post?.userId?.name}
            like={post?.postUserLikeList.some((like) => like.userId === auth.id)}
            key={post.id}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked}
          />
        })}
      <Footer />
    </>
  );
};

export default Feed;

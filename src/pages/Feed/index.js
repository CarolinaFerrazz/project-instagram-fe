import { ContainerIcon, IconAdd } from "./styles";
import Header from "../../components/Header";
import PostsFeed from "../../components/PostsFeed";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import GetPostFromUserIsFollowing from "../../services/GetPostFromUserIsFollowing";
import useAuth from "../../hooks/useAuth";
import IconAddPost from "../../assets/addImage.svg";
import Messages from "../../components/Messages";

const Feed = () => {
  const { auth } = useAuth();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const data = await GetPostFromUserIsFollowing(auth.token);

      setPosts(data.data);
      console.log(data.data);
    }
    getPosts();
  }, []);

  console.log(auth);
  return (
    <>
      <Header />
      <ContainerIcon>
        {/* BOTAO PARA AIDIONAR POSTS  */}
        <IconAdd src={IconAddPost} />
      </ContainerIcon>
      <Messages mesgError="Error" />

      {posts.map((post) => (
        <PostsFeed
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
        />
      ))}
      <Footer />
    </>
  );
};

export default Feed;

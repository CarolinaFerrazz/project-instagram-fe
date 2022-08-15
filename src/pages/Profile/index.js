import { Container } from "./styles";
import Header from "../../components/Header";
import ProfileDiv from "../../components/ProfileDiv";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import GetUser from "../../services/GetUser";
import PostsProfile from "../../components/PostsProfile";
import MorePosts from "../../components/MorePosts";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});
  const [list, setPostList] = useState([]);

  const [likeClicked, setLikeClicked] = useState(false);
  const [postId, setPostId] = useState("");
  const [numLikes, setNumLikes] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  function handleLikeClicked() {
    setLikeClicked(!likeClicked);
  }

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


  useEffect(() => {
    async function getProfileInfo() {
      const data = await GetUser(token);
      const user = data.data;
      const userInfo = {
        email: user.email,
        avatar: user.profilePhoto,
        name: user.name,
        userName: user.username,
        description: user.description,
      };

      setUserData(userInfo);
      setPostList(user.postList);
    }
    getProfileInfo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Container>
        {showMore
          ?
          <MorePosts
            postId={postId}
            showMoreHandler={showMoreHandler}
            likes={numLikes}
            liked={isLiked}
            handleLikeClicked={handleLikeClicked}
          />

          : null}
        {!showMore
          ?
          <ProfileDiv
            userData={userData}
            email={userData.email}
            avatar={userData.avatar}
            name={userData.name}
            userName={userData.userName}
            description={userData.description}
            postList={list}
          />
          : null}
      </Container>
      {!showMore
        ?
        list.length === 0
          ? null
          : <PostsProfile
            list={list}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked} />
        : null}
      <Footer />
    </>
  );
};

export default Profile;

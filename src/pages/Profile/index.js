import { Container } from "./styles";
import Header from "../../components/Header";
import ProfileDiv from "../../components/ProfileDiv";
import { useEffect, useState } from "react";
import GetUser from "../../services/GetUser";
import PostsProfile from "../../components/PostsProfile";
import MorePosts from "../../components/MorePosts";
import NoPostsYet from "../../components/NoPostYet";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});
  const [list, setPostList] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);
  const [postId, setPostId] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  function handleLikeClicked() {
    setLikeClicked(!likeClicked);
  }

  function showMoreHandler(id) {
    if (!showMore) {
      setPostId(id);
      setShowMore(!showMore);
    } else {
      setPostId("");
      setShowMore(!showMore);
    }
  }


  useEffect(() => {
    async function getProfileInfo() {
      const data = await GetUser(token);
      const user = data.data;
      const userInfo = {
        id: user.id,
        email: user.email,
        avatar: user.profilePhoto,
        name: user.name,
        userName: user.username,
        description: user.description,
      };
      setUserData(userInfo);
      setPostList(user.postList);
      setFollowers(user.followers);
      setFollowing(user.following);
    }
    getProfileInfo();
    // eslint-disable-next-line
  }, [likeClicked]);

  return (
    <>
      <Header />
      {showMore
        ?
        <MorePosts
          postId={postId}
          showMoreHandler={showMoreHandler}
          handleLikeClicked={handleLikeClicked}
        />

        : null}
      <Container>
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
            followers={followers}
            following={following}
          />
          : null}
      </Container>
      {!showMore
        ?
        list.length === 0
          ? <NoPostsYet />
          : <PostsProfile
            list={list}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked} />
        : null}
    </>
  );
};

export default Profile;

import {
  AlignAllCenter,
  Container,
} from "./styles";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import GetUserById from "../../services/GetUserById";
import useAuth from "../../hooks/useAuth";
import ViewProfileDiv from "../../components/ViewProfileDiv";
import MorePosts from "../../components/MorePosts";
import Header from "../../components/Header";
import PostsProfile from "../../components/PostsProfile";
// import Follow from "../../assets/follow.svg";

const ViewProfile = () => {
  const location = useLocation();
  const { auth } = useAuth();
  const [userData, setUserData] = useState({});
  const [list, setPostList] = useState([]);
  const [likeClicked, setLikeClicked] = useState(false);
  const [postId, setPostId] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  function showMoreHandler(id) {
    if (!showMore) {
      setPostId(id);
      setShowMore(!showMore);
    } else {
      setPostId("");
      setShowMore(!showMore);
    }
  }

  function handleLikeClicked() {
    setLikeClicked(!likeClicked);
  }

  useEffect(() => {
    console.log(location.state.id)
    async function get() {
      const data = await GetUserById(location.state.id, auth.token);
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
    get()
  }, [likeClicked])






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
      <AlignAllCenter>

        <Container>
          {!showMore
            ? <ViewProfileDiv
              userData={userData}
              email={userData.email}
              avatar={userData.avatar}
              name={userData.name}
              userName={userData.userName}
              description={userData.description}
              postList={list}
              followers={followers}
              following={following} />
            : null}
        </Container>

      </AlignAllCenter>
      {!showMore
        ?
        list.length === 0
          ? null
          : <PostsProfile
            list={list}
            showMoreHandler={showMoreHandler}
            handleLikeClicked={handleLikeClicked} />
        : null}
    </>
  );
};

export default ViewProfile;

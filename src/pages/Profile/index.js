import { Container } from "./styles";
import Header from "../../components/Header";
import ProfileDiv from "../../components/ProfileDiv";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import GetUser from "../../services/GetUser";
import PostsProfile from "../../components/PostsProfile";

const Profile = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState({});
  const [list, setPostList] = useState([]);

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
        <ProfileDiv
          userData={userData}
          email={userData.email}
          avatar={userData.avatar}
          name={userData.name}
          userName={userData.userName}
          description={userData.description}
          postList={list}
        />
      </Container>

      {/* COMPONENTE PARA APARECER FOTOS NO PROFILE */}
      <PostsProfile />
      <Footer />
    </>
  );
};

export default Profile;

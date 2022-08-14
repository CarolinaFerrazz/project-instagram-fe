import { Container } from "./styles";
import Header from "../../components/Header";
import ProfileDiv from "../../components/ProfileDiv";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import GetUser from "../../services/GetUser";

const Profile = () => {
  const token = localStorage.getItem('token')
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [List, setPostList] = useState([]);
  const [description, setdescription] = useState("");
  useEffect(() => {

    async function getProfileInfo() {
      const data = await GetUser(token);
      const user = data.data;
      console.log(data)
      setEmail(user.email);
      setAvatar(user.profilePhoto);
      setName(user.name);
      setUsername(user.username);
      setPostList(user.postList)
      setdescription(user.description)
    }
    getProfileInfo();
  }, [])


  return (
    <>
      <Header />
      <Container>
        <ProfileDiv
          email={email}
          avatar={avatar}
          name={name}
          userName={userName}
          description={description}
          postList={List} />
      </Container>
      <Footer />
    </>
  );
};

export default Profile;

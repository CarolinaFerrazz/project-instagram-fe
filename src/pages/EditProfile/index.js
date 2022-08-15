import Header from "../../components/Header";
import {
  AllAlignCenter,
  Container,
  ContainerPictureAndName,
  ProfilePicture,
  ContainerTextUserAndPicture,
  TextUserName,
  TextChangePicture,
  ContainerFormEditProfile,
  InputChangePicture,
  LabelChangeName,
  LabelChangeBio,
  InputChangeName,
  InputChangeBio,
  TextAboutChangeName,
  ContainerButtonConfirm,
  ButtonConfirm,
} from "./styles.js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "../../services/UpdateProfile";

const EditProfile = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const { userData } = location.state;
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [failToUpdate, setFailToUpdate] = useState(false);

  async function update() {

    const update = {
      name: name,
      profilePhoto: avatar,
      description: bio
    }
    const updatedUser = await UpdateProfile(update, auth.token);

    if (updatedUser === null) {
      setFailToUpdate(true);
    } else {
      const user = {
        avatar: updatedUser.profilePhoto,
        userName: updatedUser.username,
      }
      setUser(user);
      setName(updatedUser.name);
      setBio(updatedUser.description);
      setAvatar(updatedUser.profilePhoto);
      setFailToUpdate(false);
    }
  }

  useEffect(() => {
    setUser(userData);
    setName(userData.name);
    setBio(userData.description);
    setAvatar(userData.avatar);
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <ContainerPictureAndName>
            <ProfilePicture src={user.avatar} />
            <ContainerTextUserAndPicture>
              <TextUserName>{user.userName}</TextUserName>
              <LabelChangeName>
                <TextChangePicture>change your profile picture</TextChangePicture>
                <InputChangePicture name="change avatar" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
              </LabelChangeName>
            </ContainerTextUserAndPicture>
          </ContainerPictureAndName>
          <ContainerFormEditProfile>
            <LabelChangeName>
              Name
              <InputChangeName name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </LabelChangeName>
            <TextAboutChangeName>
              Help people find your account using the name they call you: your
              full name, your nickname or your business name.
            </TextAboutChangeName>
            <TextAboutChangeName>
              You can only change your name twice every 14 days.
            </TextAboutChangeName>
            <LabelChangeBio>
              Bio
            </LabelChangeBio>
            <InputChangeBio name="bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </ContainerFormEditProfile>
          <ContainerButtonConfirm>
            <ButtonConfirm onClick={update}>Confirm</ButtonConfirm>
          </ContainerButtonConfirm>
        </Container>
      </AllAlignCenter>
    </>
  );
};

export default EditProfile;

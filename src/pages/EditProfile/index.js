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
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateProfile from "../../services/UpdateProfile";
import Messages from "../../components/Messages";

const EditProfile = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const { userData } = location.state;
  const [user, setUser] = useState({});
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  async function update() {
    const update = {
      name: name,
      profilePhoto: avatar,
      description: bio,
    };
    const updatedUser = await UpdateProfile(update, auth.token);

    if (updatedUser?.code) {

      setErrorMessage(updatedUser.message)
      setSuccessMessage("");
    } else {
      const user = {
        avatar: updatedUser.profilePhoto,
        userName: updatedUser.username,
      };
      setUser(user);
      setName(updatedUser.name);
      setBio(updatedUser.description);
      setAvatar(updatedUser.profilePhoto);
      setSuccessMessage("success!");
      setErrorMessage("");
      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }
  }

  useEffect(() => {
    setUser(userData);
    setName(userData.name);
    setBio(userData.description);
    setAvatar(userData.avatar);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      {errorMessage ? <Messages mesgError={errorMessage} /> : null}
      {successMessage ? <Messages mesgSuccess={successMessage} /> : null}
      <AllAlignCenter>

        <Container>
          <ContainerPictureAndName>
            <ProfilePicture src={user.avatar} />
            <ContainerTextUserAndPicture>
              <TextUserName>{user.userName}</TextUserName>
              <LabelChangeName>
                <TextChangePicture>
                  change your profile picture
                </TextChangePicture>
                <InputChangePicture
                  name="change avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </LabelChangeName>
            </ContainerTextUserAndPicture>
          </ContainerPictureAndName>
          <ContainerFormEditProfile>
            <LabelChangeName>
              Name
              <InputChangeName
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </LabelChangeName>
            <TextAboutChangeName>
              Help people find your account using the name they call you: your
              full name, your nickname or your business name.
            </TextAboutChangeName>
            <TextAboutChangeName>
              You can only change your name twice every 14 days.
            </TextAboutChangeName>
            <LabelChangeBio>Bio</LabelChangeBio>
            <InputChangeBio
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
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

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Picture from "../../assets/profile.jpg";
import {
  AllAlignCenter,
  Container,
  ContainerPictureAndName,
  ProfilePicture,
  ContainerTextUserAndPicture,
  TextUserName,
  TextChangePicture,
  ContainerFormEditProfile,
  LabelChangeName,
  LabelChangeBio,
  InputChangeName,
  InputChangeBio,
  TextAboutChangeName,
  ContainerButtonConfirm,
  ButtonConfirm,
} from "./styles.js";

const EditProfile = () => {
  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <ContainerPictureAndName>
            <ProfilePicture src={Picture} />
            <ContainerTextUserAndPicture>
              <TextUserName>userName</TextUserName>
              <TextChangePicture>change your profile picture</TextChangePicture>
            </ContainerTextUserAndPicture>
          </ContainerPictureAndName>
          <ContainerFormEditProfile>
            <LabelChangeName>
              Name
              <InputChangeName name="name" />
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
            <InputChangeBio name="bio" />
          </ContainerFormEditProfile>
          <ContainerButtonConfirm>
            <ButtonConfirm>Confirm</ButtonConfirm>
          </ContainerButtonConfirm>
        </Container>
      </AllAlignCenter>
      <Footer />
    </>
  );
};

export default EditProfile;

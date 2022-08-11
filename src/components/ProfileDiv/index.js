import {
  AlignAllCenter,
  Container,
  UserName,
  ContainerImageAndNumbers,
  ImageProfile,
  ContainerInfoNumbers,
  ContainerNumberAndTitle,
  NumberInfoNumbers,
  TitleInfoNumbers,
  NameProfile,
  DescriptionProfile,
  ContainerButtonsProfile,
  ButtonSaves,
  ButtonEditProfile,
} from "./styles";
import ProfileCR7 from "../../assets/profile.jpg";
import Saves from "../../assets/saves.svg";

const ProfileDiv = () => {
  return (
    <>
      <AlignAllCenter>
        <Container>
          <UserName>name user</UserName>
          <ContainerImageAndNumbers>
            <ImageProfile src={ProfileCR7}></ImageProfile>
            <ContainerInfoNumbers>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Posts</TitleInfoNumbers>
              </ContainerNumberAndTitle>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Followers</TitleInfoNumbers>
              </ContainerNumberAndTitle>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0</NumberInfoNumbers>
                <TitleInfoNumbers>Following</TitleInfoNumbers>
              </ContainerNumberAndTitle>
            </ContainerInfoNumbers>
          </ContainerImageAndNumbers>
          <NameProfile>name profile</NameProfile>
          <DescriptionProfile>
            decricao a falar sobre a pesoa vla bla bla kwdedr8fr4hfurfrbnfnv
          </DescriptionProfile>
          <ContainerButtonsProfile>
            <ButtonSaves src={Saves}></ButtonSaves>
            <ButtonEditProfile>Edit Profile</ButtonEditProfile>
          </ContainerButtonsProfile>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default ProfileDiv;

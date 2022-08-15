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
  ContainerPics,
  IconNoPosts,
  TitleNoPosts,
  LinksPages,
  LinkEditProfile,
} from "./styles";
import Saves from "../../assets/saves.svg";
import NoPost from "../../assets/noPostsYet.svg";

const ProfileDiv = (props) => {
  const { userData, name, userName, avatar, description, postList } = props;
  return (
    <>
      <AlignAllCenter>
        <Container>
          <UserName>{userName}</UserName>
          <ContainerImageAndNumbers>
            <ImageProfile src={avatar}></ImageProfile>
            <ContainerInfoNumbers>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>{postList.length} </NumberInfoNumbers>
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
          <NameProfile>{name}</NameProfile>
          <DescriptionProfile>
            {description ? description : "Say whats on your mind"}
          </DescriptionProfile>
          <ContainerButtonsProfile>
            <LinksPages href="/saves" title="Saves">
              <ButtonSaves src={Saves} alt="icon"></ButtonSaves>
            </LinksPages>
            <ButtonEditProfile>
              <LinkEditProfile title="Edit" className="ok" to="/editprofile" state={{ userData }}>Edit Profile</LinkEditProfile>
            </ButtonEditProfile>
          </ContainerButtonsProfile>
          <ContainerPics>
            <IconNoPosts src={NoPost} alt="icon"></IconNoPosts>
            <TitleNoPosts>No posts yet</TitleNoPosts>
          </ContainerPics>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default ProfileDiv;

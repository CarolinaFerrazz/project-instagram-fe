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
  ButtonEditProfile,
  LinksPages,
  LinkEditProfile,
} from "./styles";

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
            </LinksPages>
            <ButtonEditProfile>
              <LinkEditProfile title="Edit" className="ok" to="/editprofile" state={{ userData }}>Edit Profile</LinkEditProfile>
            </ButtonEditProfile>
          </ContainerButtonsProfile>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default ProfileDiv;

import {
  AllAlignCenter,
  Container,
  TitleFollowers,
  TextNumberFollowers,
  ImageAndNames,
  ProfileImage,
  ContainerNames,
  NameProfile,
  UserName,
} from "./styles";
import CR7 from "../../assets/profile.jpg";
import Header from "../../components/Header";

const ViewFollowers = () => {
  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <TitleFollowers>Followers</TitleFollowers>
          <TextNumberFollowers>0</TextNumberFollowers>
          {/* BLOCO DE CODIGO COM INFO DOS USERS */}
          <ImageAndNames>
            <ProfileImage src={CR7} />
            <ContainerNames>
              <UserName>o @ do User</UserName>
              <NameProfile>Name user</NameProfile>
            </ContainerNames>
          </ImageAndNames>

          <ImageAndNames>
            <ProfileImage src={CR7} />
            <ContainerNames>
              <UserName>o @ do User</UserName>
              <NameProfile>Name user</NameProfile>
            </ContainerNames>
          </ImageAndNames>
        </Container>
      </AllAlignCenter>
    </>
  );
};

export default ViewFollowers;

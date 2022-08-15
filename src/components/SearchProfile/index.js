import {
    AllAlignCenter,
    Container,
    TitleUser,
    ImageAndNames,
    ProfileImage,
    ContainerNames,
    NameProfile,
    UserName,
  } from "./styles";
  import CR7 from "../../assets/profile.jpg";
  
  const SearchProfile = () => {
    return (
      <>
        <AllAlignCenter>
          <Container>
            <TitleUser>NAME USER PROCURADO</TitleUser>
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
  
  export default SearchProfile;
  
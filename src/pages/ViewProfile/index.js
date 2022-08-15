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
  ButtonFollow,
} from "./styles";
import ProfileCR7 from "../../assets/profile.jpg";
// import Follow from "../../assets/follow.svg";

const ViewProfile = () => {
  return (
    <>
      <AlignAllCenter>
        <Container>
          <UserName>UserName</UserName>
          <ContainerImageAndNumbers>
            <ImageProfile src={ProfileCR7}></ImageProfile>
            <ContainerInfoNumbers>
              <ContainerNumberAndTitle>
                <NumberInfoNumbers>0 </NumberInfoNumbers>
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
          <NameProfile>Name</NameProfile>
          <DescriptionProfile>descricao</DescriptionProfile>
          <ContainerButtonsProfile>
            {/* SE CARREGAR NO BOTAO O TEXTO PASSA PARA O ICON que esta comentado na linha de baixo e o seu IMPORT la em cima */}
            <ButtonFollow>
              Follow
              {/* <img alt="icon" src={Follow} /> */}
            </ButtonFollow>
          </ContainerButtonsProfile>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default ViewProfile;

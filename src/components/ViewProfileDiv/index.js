import {
  ButtonFollow,
  ContainerButtonsProfile,
  ContainerImageAndNumbers,
  ContainerInfoNumbers,
  ContainerNumberAndTitle,
  DescriptionProfile,
  ImageProfile,
  NameProfile,
  NumberInfoNumbers,
  TitleInfoNumbers,
  UserName,
} from "./styles";
import ProfileCR7 from "../../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

export default function ViewProfileDiv(props) {
  const {
    userData,
    name,
    userName,
    avatar,
    description,
    postList,
    followers,
    following,
  } = props;
  const navigate = useNavigate();
  console.log(userData.id);

  return (
    <>
      <UserName>{userName}</UserName>
      <ContainerImageAndNumbers>
        <ImageProfile src={avatar}></ImageProfile>
        <ContainerInfoNumbers>
          <ContainerNumberAndTitle>
            <NumberInfoNumbers>{postList.length}</NumberInfoNumbers>
            <TitleInfoNumbers>Posts</TitleInfoNumbers>
          </ContainerNumberAndTitle>
          <ContainerNumberAndTitle>
            <NumberInfoNumbers>{followers.length}</NumberInfoNumbers>
            <TitleInfoNumbers>Followers</TitleInfoNumbers>
          </ContainerNumberAndTitle>
          <ContainerNumberAndTitle
            onClick={() =>
              navigate("/viewfollowing", { state: { id: userData.id } })
            }
          >
            <NumberInfoNumbers>{following.length}</NumberInfoNumbers>
            <TitleInfoNumbers>Following</TitleInfoNumbers>
          </ContainerNumberAndTitle>
        </ContainerInfoNumbers>
      </ContainerImageAndNumbers>
      <NameProfile>{name}</NameProfile>
      <DescriptionProfile>
        {description ? description : "Say whats on your mind"}
      </DescriptionProfile>
      <ContainerButtonsProfile>
        {/* SE CARREGAR NO BOTAO O TEXTO PASSA PARA O ICON que esta comentado na linha de baixo e o seu IMPORT la em cima */}
        <ButtonFollow>
          Follow
          {/* <img alt="icon" src={Follow} /> */}
        </ButtonFollow>
      </ContainerButtonsProfile>
    </>
  );
}

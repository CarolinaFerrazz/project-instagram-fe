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
import Follow from "../../assets/follow.svg";
import { useNavigate } from "react-router-dom";
import RemoveFollowing from "../../services/RemoveFollowing";
import useAuth from "../../hooks/useAuth";
import AddFollowing from "../../services/AddFollowing";

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
    isFollowing,
    handleFollowClicked,
  } = props;
  const navigate = useNavigate();
  const { auth } = useAuth();

  async function handleFollow() {


    if (isFollowing) {
      const body = {
        toUnfollowUserId: userData.id
      }
      await RemoveFollowing(body, auth.token)
      handleFollowClicked();
    } else {
      const body = {
        toFollowUserId: userData.id
      }
      await AddFollowing(body, auth.token)
      handleFollowClicked();
    }




  }




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
          <ContainerNumberAndTitle onClick={() =>
            navigate("/viewfollowers", { state: { id: userData.id } })
          }>
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
        {userData.id === auth.id
          ? null
          :
          <ButtonFollow onClick={handleFollow}>
            {isFollowing ? <img alt="icon" src={Follow} /> : "Follow"}
          </ButtonFollow>

        }

      </ContainerButtonsProfile>
    </>
  );
}

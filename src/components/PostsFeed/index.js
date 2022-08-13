import {
  AlignAllCenter,
  Container,
  ContainerNameUser,
  NameUser,
  ImagePost,
  ContainerIconsPost,
  IconLike,
  IconComments,
  IconSavePost,
  ContainerLikes,
  TextLikes,
  NumberOfLikes,
  ContainerNameAndDescription,
  NameUserPost,
  DescriptionPost,
  AllComents,
  TimePost,
  HrComment,
  ContainerNewCommentAndPublish,
  AddNewComment,
  ButtonPublish,
} from "./styles";
import Post from "../../assets/profile.jpg";
// import IconLikeEnabled from "../../assets/likeEnabled.svg";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import IconSaveEnabled from "../../assets/saveDisabled.svg";
// import IconSaveDisabled from "../../assets/saveDisabled.svg";
import IconComment from "../../assets/comment.svg";

const PostsFeed = () => {
  return (
    <>
      <AlignAllCenter>
        <Container>
          <ContainerNameUser>
            <NameUser>name user</NameUser>
          </ContainerNameUser>
          <ImagePost src={Post} />
          <ContainerIconsPost>
            <div>
              <IconLike src={IconLikeDisabled} />
              <IconComments src={IconComment} />
            </div>
            <IconSavePost src={IconSaveEnabled} />
          </ContainerIconsPost>
          <ContainerLikes>
            <NumberOfLikes>102</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLikes>
          <ContainerNameAndDescription>
            <NameUserPost>nameUser</NameUserPost>
            <DescriptionPost>descricao da foto la la</DescriptionPost>
          </ContainerNameAndDescription>
          <AllComents>ver todos os comentarios</AllComents>
          <TimePost>ha 10 horas</TimePost>
          <HrComment />
          <ContainerNewCommentAndPublish>
            <AddNewComment>adicionar comentario</AddNewComment>
            <ButtonPublish>publish</ButtonPublish>
          </ContainerNewCommentAndPublish>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsFeed;

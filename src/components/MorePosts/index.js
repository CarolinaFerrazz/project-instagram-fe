import {
  AlignAllCenter,
  ContainerImagePost,
  ContainerInfoPost,
  ContainerNameAndImageUser,
  NameUser,
  ImageProfileUser,
  ImagePost,
  ContainerIconsPost,
  IconLike,
  IconComments,
  ContainerLikes,
  TextLikes,
  NumberOfLikes,
  ContainerDescription,
  DescriptionPost,
  TimePost,
  ContainerNewCommentAndPublish,
  AddNewComment,
  ButtonPublish,
  ContainerAllComents,
  ContainerUserNameAndComment,
  UserNameComment,
  TextComment,
  ContainerTimeAndLike,
  TimeComment,
  LikeComment,
} from "./styles";
// import IconLikeEnabled from "../../assets/likeEnabled.svg";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import IconComment from "../../assets/comment.svg";
import ImageFeed from "../../assets/profile.jpg";
import ImageProfileCR7 from "../../assets/profile.jpg"

const MorePosts = () => {
  return (
    <>
      <AlignAllCenter>
        <ContainerImagePost>
          <ImagePost src={ImageFeed} />
        </ContainerImagePost>
        <ContainerInfoPost>
          <ContainerNameAndImageUser>
            <ImageProfileUser src={ImageProfileCR7}/>
            <NameUser>NAME</NameUser>
          </ContainerNameAndImageUser>
          <ContainerDescription>
            <DescriptionPost>DESCRICAO</DescriptionPost>
          </ContainerDescription>

          {/* CAIXINHA COM COMENTARIOS */}
          <ContainerAllComents>
            <ContainerUserNameAndComment>
              <UserNameComment>USERNAME</UserNameComment>
              <TextComment>TEXTO DO COMENTARIO</TextComment>
            </ContainerUserNameAndComment>
            <ContainerTimeAndLike>
              <TimeComment>10h</TimeComment>
              <LikeComment src={IconLikeDisabled} />
            </ContainerTimeAndLike>
          </ContainerAllComents>
          {/* CAIXINHA COM COMENTARIOS */}
          <ContainerAllComents>
            <ContainerUserNameAndComment>
              <UserNameComment>USERNAME</UserNameComment>
              <TextComment>TEXTO DO COMENTARIO</TextComment>
            </ContainerUserNameAndComment>
            <ContainerTimeAndLike>
              <TimeComment>10h</TimeComment>
              <LikeComment src={IconLikeDisabled} />
            </ContainerTimeAndLike>
          </ContainerAllComents>

          <ContainerIconsPost>
            <IconLike src={IconLikeDisabled} />
            <IconComments src={IconComment} />
          </ContainerIconsPost>
          <ContainerLikes>
            <NumberOfLikes>NUMERO DE LIKES</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLikes>
          <TimePost>DATA</TimePost>
          <ContainerNewCommentAndPublish>
            <AddNewComment placeholder="Add a comment..."></AddNewComment>
            <ButtonPublish>Post</ButtonPublish>
          </ContainerNewCommentAndPublish>
        </ContainerInfoPost>
      </AlignAllCenter>
    </>
  );
};

export default MorePosts;

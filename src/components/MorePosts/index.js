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
        <button onClick={showMoreHandler}>Show Less</button>
        <ContainerImagePost>
          <ImagePost src={photo} />
        </ContainerImagePost>
        <ContainerInfoPost>
          <ContainerNameAndImageUser>
            <ImageProfileUser src={ImageProfileCR7} />
            <NameUser>NAME</NameUser>
          </ContainerNameAndImageUser>
          <ContainerDescription>
            <div>
              <DescriptionPost>{discription}</DescriptionPost>
              <DescriptionPost>{tags}</DescriptionPost>
            </div>


          </ContainerDescription>
          {comments.map(({ creationDate, description, id, commentUserLikeList }) =>
            <Comment
              creationDate={creationDate}
              description={description}
              id={id}
              likes={commentUserLikeList.length}
              key={id}
            />)}

          <ContainerIconsPost>
            <IconLike src={IconLikeDisabled} />
            <IconComments src={IconComment} />
          </ContainerIconsPost>
          <ContainerLikes>
            <NumberOfLikes>{likes}</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLikes>
          <TimePost>{creationDate}</TimePost>
          <ContainerNewCommentAndPublish>
            <AddNewComment placeholder="Add a comment..." value={writingComment} onChange={(e) => setWritingComment(e.target.value)}></AddNewComment>
            <ButtonPublish onClick={handleCommentPost}>Post</ButtonPublish>
          </ContainerNewCommentAndPublish>
        </ContainerInfoPost>

      </AlignAllCenter>
    </>
  );
};

export default MorePosts;

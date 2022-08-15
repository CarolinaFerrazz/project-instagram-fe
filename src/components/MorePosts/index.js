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
import { useEffect, useState } from "react";
import GetPostById from "../../services/GetPostById";
import useAuth from "../../hooks/useAuth";
import Comment from "../Comment";
import PostComment from "../../services/PostComment";

const MorePosts = (props) => {
  const { auth } = useAuth();
  const { showMoreHandler, postId, likes } = props;
  const [photo, setPhoto] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([]);
  const [discription, setDiscription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [tags, setTags] = useState();
  const [writingComment, setWritingComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(true);

  async function handleCommentPost() {
    const body = {
      description: writingComment,
      postId: postId
    }
    await PostComment(body, auth.token);
    setWritingComment("");
    setCommentAdded(!commentAdded);
  }


  useEffect(() => {

    async function get() {
      const post = await GetPostById(postId, auth.token);
      const { commentList, creationDate, description, userId, photo, tagList } = post.data
      setPhoto(photo);
      setAuthor(userId.name);
      setComments(commentList);
      setDiscription(description)
      setCreationDate(creationDate);
      setTags(tagList.map(tag => tag.tag).join(","));
      console.log()
    }
    get();
  }, [commentAdded]);
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
            <NameUser>{author}</NameUser>
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

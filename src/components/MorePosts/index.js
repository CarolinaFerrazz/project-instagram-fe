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
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import IconComment from "../../assets/comment.svg";
import { useEffect, useState } from "react";
import GetPostById from "../../services/GetPostById";
import useAuth from "../../hooks/useAuth";
import Comment from "../Comment";
import PostComment from "../../services/PostComment";
import RemoveLike from "../../services/RemoveLike";
import AddLike from "../../services/AddLike";
import IconLikeEnabled from "../../assets/likeEnabled.svg";

const MorePosts = (props) => {
  const { auth } = useAuth();
  const { showMoreHandler, postId, likes, liked, handleLikeClicked } = props;
  const [photo, setPhoto] = useState("");
  const [author, setAuthor] = useState("");
  const [comments, setComments] = useState([]);
  const [discription, setDiscription] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [tags, setTags] = useState("");
  const [writingComment, setWritingComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(true);
  const [postUserAvatar, setPostUserAvatar] = useState("");
  const [numOfLikes, setNumOfLikes] = useState("");
  const [isLiked, setIsLiked] = useState(false);




  async function handleLikes() {
    const body = {
      postId: postId,
    };
    if (isLiked) {
      await RemoveLike(body, auth.token);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes - 1);
      handleLikeClicked()
    } else {
      await AddLike(body, auth.token);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes + 1);
      handleLikeClicked()
    }
  }



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
      setPostUserAvatar(userId.profilePhoto)
      setNumOfLikes(likes)
      setIsLiked(liked)
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
            <ImageProfileUser src={postUserAvatar} />
            <NameUser>{author}</NameUser>
          </ContainerNameAndImageUser>
          <ContainerDescription>
            <div>
              <DescriptionPost>{discription}</DescriptionPost>
              <DescriptionPost>{tags}</DescriptionPost>
            </div>


          </ContainerDescription>
          {comments.map(({ creationDate, description, id, commentUserLikeList, userId }) =>
            <Comment
              creationDate={creationDate}
              description={description}
              id={id}
              user={userId.name}
              likes={commentUserLikeList.length}
              key={id}
            />)}

          <ContainerIconsPost>
            <IconLike src={!isLiked ? IconLikeDisabled : IconLikeEnabled} onClick={handleLikes} />
          </ContainerIconsPost>
          <ContainerLikes>
            <NumberOfLikes>{numOfLikes}</NumberOfLikes>
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

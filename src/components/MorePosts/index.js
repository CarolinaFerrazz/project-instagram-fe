import {
  ContainerButtonBack,
  ButtonBack,
  AlignAllCenter,
  ContainerImagePost,
  ContainerInfoPost,
  ContainerNameAndImageUser,
  NameUser,
  ImageProfileUser,
  ImagePost,
  ContainerLike,
  IconLike,
  TextLikes,
  NumberOfLikes,
  ContainerDescription,
  DescriptionPost,
  TextHashtag,
  TimePost,
  ContainerNewCommentAndPublish,
  AddNewComment,
  ButtonPublish,
  ContainerComents,
  IconBack,
} from "./styles";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import { useEffect, useState } from "react";
import GetPostById from "../../services/GetPostById";
import useAuth from "../../hooks/useAuth";
import Comment from "../Comment";
import PostComment from "../../services/PostComment";
import RemoveLike from "../../services/RemoveLike";
import AddLike from "../../services/AddLike";
import IconLikeEnabled from "../../assets/likeEnabled.svg";
import IconBackPage from "../../assets/back.svg";

const MorePosts = (props) => {
  const { auth } = useAuth();
  const { showMoreHandler, postId, handleLikeClicked } = props;
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
      handleLikeClicked();
    } else {
      await AddLike(body, auth.token);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes + 1);
      handleLikeClicked();
    }
  }

  async function handleCommentPost() {
    const body = {
      description: writingComment,
      postId: postId,
    };
    await PostComment(body, auth.token);
    setWritingComment("");
    setCommentAdded(!commentAdded);
  }

  useEffect(() => {
    async function get() {
      const post = await GetPostById(postId, auth.token);
      const { commentList, creationDate, description, userId, photo, tagList, postUserLikeList } =
        post.data;
      setPhoto(photo);
      setAuthor(userId.name);
      setComments(commentList);
      setDiscription(description);
      setCreationDate(creationDate);
      setTags(tagList.map((tag) => tag.tag).join(","));
      setPostUserAvatar(userId.profilePhoto);
      setNumOfLikes(postUserLikeList.length);
      setIsLiked(postUserLikeList.some((like) => like.userId === auth.id));
      console.log();
    }
    get();
  }, [commentAdded]);

  return (
    <>
      <AlignAllCenter>
        <ContainerImagePost>
          <ContainerButtonBack>
            <ButtonBack onClick={showMoreHandler}>
              <IconBack src={IconBackPage} />
            </ButtonBack>
          </ContainerButtonBack>
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
              <TextHashtag>{tags}</TextHashtag>
            </div>
          </ContainerDescription>
          <ContainerComents>
            {comments.map(
              ({
                creationDate,
                description,
                id,
                commentUserLikeList,
                userId,
              }) => (
                <Comment
                  creationDate={creationDate}
                  description={description}
                  id={id}
                  user={userId.name}
                  likes={commentUserLikeList.length}
                  key={id}
                />
              )
            )}
          </ContainerComents>

          <ContainerLike>
            <IconLike
              src={!isLiked ? IconLikeDisabled : IconLikeEnabled}
              onClick={handleLikes}
            />
            <NumberOfLikes>{numOfLikes}</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLike>
          <TimePost>{creationDate}</TimePost>
          <ContainerNewCommentAndPublish>
            <AddNewComment
              placeholder="Add a comment..."
              value={writingComment}
              onChange={(e) => setWritingComment(e.target.value)}
            ></AddNewComment>
            <ButtonPublish onClick={handleCommentPost}>Post</ButtonPublish>
          </ContainerNewCommentAndPublish>
        </ContainerInfoPost>
      </AlignAllCenter>
    </>
  );
};

export default MorePosts;

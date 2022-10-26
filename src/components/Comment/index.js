import { useState } from "react";
import {
  ContainerAllComents,
  ContainerTimeAndLike,
  ContainerUserNameAndComment,
  LikeComment,
  NumberLikesComment,
  ContainerComment,
  TextComment,
  TimeComment,
  UserNameComment,
} from "./styles";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import IconLikeEnabled from "../../assets/likeEnabled.svg";
import useAuth from "../../hooks/useAuth";
import AddCommentLike from "../../services/AddCommentLike";
import RemoveCommentLike from "../../services/RemoveCommentLike";
const Comment = (props) => {
  const {
    creationDate,
    description,
    id,
    user,
    likes,
    isLiked,
    commentLikeClicked,
  } = props;
  const { auth } = useAuth();
  const [liked, setLiked] = useState(isLiked);
  const [numLikes, setNumLikes] = useState(likes);
  async function handleCommentLike() {
    const body = {
      commentId: id,
    };

    if (!liked) {
      AddCommentLike(body, auth.token);
      setLiked(!liked);
      setNumLikes(numLikes + 1);
      commentLikeClicked();
    } else {
      RemoveCommentLike(body, auth.token);
      setLiked(!liked);
      setNumLikes(numLikes - 1);
      commentLikeClicked();
    }
  }

  return (
    <ContainerAllComents>
      <ContainerUserNameAndComment>
        <UserNameComment>{user}</UserNameComment>
        <ContainerComment>
          <TextComment>{description}</TextComment>
        </ContainerComment>
      </ContainerUserNameAndComment>
      <ContainerTimeAndLike>
        <TimeComment>{creationDate}</TimeComment>
        <NumberLikesComment>{numLikes}</NumberLikesComment>
        <LikeComment
          onClick={handleCommentLike}
          src={liked ? IconLikeEnabled : IconLikeDisabled}
        />
      </ContainerTimeAndLike>
    </ContainerAllComents>
  );
};
export default Comment;

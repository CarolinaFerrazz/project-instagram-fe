import React from "react";
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
const Comment = (props) => {
  const { creationDate, description, id, user, likes } = props;

  return (
    <ContainerAllComents>
      <ContainerUserNameAndComment>
        <UserNameComment>{user}</UserNameComment>
        <ContainerComment>
          {" "}
          <TextComment>{description}</TextComment>
        </ContainerComment>
      </ContainerUserNameAndComment>
      <ContainerTimeAndLike>
        <TimeComment>{creationDate}</TimeComment>
        <NumberLikesComment>{likes}</NumberLikesComment>
        <LikeComment src={IconLikeDisabled} />
      </ContainerTimeAndLike>
    </ContainerAllComents>
  );
};
export default Comment;

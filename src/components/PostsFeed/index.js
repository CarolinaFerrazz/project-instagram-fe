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
  TimePost,
  HrComment,
  ContainerNewCommentAndPublish,
  ViewMoreInformation,
} from "./styles";
import IconLikeEnabled from "../../assets/likeEnabled.svg";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import IconSaveEnabled from "../../assets/saveDisabled.svg";
import IconComment from "../../assets/comment.svg";
import { useEffect, useState } from "react";
import RemoveLike from "../../services/RemoveLike";
import useAuth from "../../hooks/useAuth";
import AddLike from "../../services/AddLike";

const PostsFeed = (props) => {
  const { auth } = useAuth();
  const {
    postId,
    photo,
    name,
    commentList,
    description,
    creationDate,
    numLikes,
    tagList,
    like,
  } = props;
  const [isLiked, setIsLiked] = useState(like);
  const [numOfLikes, setNumOfLikes] = useState("");

  useEffect(() => {
    setNumOfLikes(numLikes);
  }, []);

  async function handleLikes() {
    const body = {
      postId: postId,
    };
    console.log(body);
    if (isLiked) {
      await RemoveLike(body, auth.token);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes - 1);
    } else {
      await AddLike(body, auth.token);
      setIsLiked(!isLiked);
      setNumOfLikes(numOfLikes + 1);
    }
  }

  return (
    <>
      <AlignAllCenter>
        <Container>
          <ContainerNameUser>
            <NameUser>{name}</NameUser>
          </ContainerNameUser>
          <ImagePost src={photo} />
          <ContainerIconsPost>
            <div>
              <span onClick={handleLikes}>
                {!isLiked ? (
                  <IconLike src={IconLikeDisabled} />
                ) : (
                  <IconLike src={IconLikeEnabled} />
                )}
              </span>
              <IconComments src={IconComment} />
            </div>
            <IconSavePost src={IconSaveEnabled} />
          </ContainerIconsPost>
          <ContainerLikes>
            <NumberOfLikes>{numOfLikes}</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLikes>
          <ContainerNameAndDescription>
            <NameUserPost>{name}</NameUserPost>
            <DescriptionPost>{description}</DescriptionPost>
          </ContainerNameAndDescription>
          <TimePost>{creationDate}</TimePost>
          <HrComment />
          <ContainerNewCommentAndPublish>
            {/* LINK PARA VER INFORMACOES DO POST */}
            <ViewMoreInformation to="/">more</ViewMoreInformation>
          </ContainerNewCommentAndPublish>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsFeed;

import {
  AlignAllCenter,
  Container,
  ContainerNameUser,
  NameUser,
  ButtonUser,
  ImageUser,
  ImagePost,
  IconLike,
  ContainerLikes,
  TextLikes,
  NumberOfLikes,
  DescriptionPost,
  TimePost,
} from "./styles";
import IconLikeEnabled from "../../assets/likeEnabled.svg";
import IconLikeDisabled from "../../assets/likeDisabled.svg";
import { useEffect, useState } from "react";
import RemoveLike from "../../services/RemoveLike";
import useAuth from "../../hooks/useAuth";
import AddLike from "../../services/AddLike";
import { useNavigate } from "react-router-dom";
const PostsFeed = (props) => {
  const { auth } = useAuth();
  const {
    postId,
    photo,
    name,
    description,
    creationDate,
    numLikes,
    like,
    showMoreHandler,
    handleLikeClicked,
    user,
  } = props;
  const [isLiked, setIsLiked] = useState(like);
  const [numOfLikes, setNumOfLikes] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setNumOfLikes(numLikes);
    // eslint-disable-next-line
  }, []);

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

  return (
    <>
      <AlignAllCenter>
        <Container>
          <ContainerNameUser>
            <ButtonUser>
              <ImageUser
                onClick={() =>
                  navigate("/viewprofile", { state: { id: user.id } })
                }
                src={user.profilePhoto}
              />
            </ButtonUser>
            <NameUser>{name}</NameUser>
          </ContainerNameUser>
          <ImagePost
            src={photo}
            onClick={() => showMoreHandler(postId, numLikes, isLiked)}
          />
          <ContainerLikes>
            <div>
              <span onClick={handleLikes}>
                {!isLiked ? (
                  <IconLike src={IconLikeDisabled} />
                ) : (
                  <IconLike src={IconLikeEnabled} />
                )}
              </span>
            </div>
            <NumberOfLikes>{numOfLikes}</NumberOfLikes>
            <TextLikes>likes</TextLikes>
          </ContainerLikes>
          <DescriptionPost>{description}</DescriptionPost>
          <TimePost>{creationDate}</TimePost>
        </Container>
      </AlignAllCenter>
    </>
  );
};

export default PostsFeed;

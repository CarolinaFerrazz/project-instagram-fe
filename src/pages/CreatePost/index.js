import Header from "../../components/Header";
import {
  AllAlignCenter,
  Container,
  TitleCreate,
  ContainerInfoUser,
  ImageProfileUser,
  UserName,
  ContainerFormCreate,
  InputCreate,
  InputDescription,
  ContainerButtonPost,
  ButtonPost,
} from "./styles";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import GetUser from "../../services/GetUser";
import AddTags from "../../services/AddTags";
import AddPost from "../../services/AddPost";
import { useNavigate } from "react-router-dom";
import Messages from "../../components/Messages";

const CreatePost = () => {
  const { auth } = useAuth();
  const [user, setuser] = useState({});
  const [postImg, sePostImg] = useState("");
  const [postDes, setPostDes] = useState("");
  const [postTags, sePostTags] = useState("");
  const [posting, sePosting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate()

  async function submit() {
    if (!postImg || !postDes) {
      setErrorMessage("You need a img and a description")
      return;
    }
    sePosting(true);
    let tags = null;
    if (postTags.replaceAll(" ", "").length !== 0) {
      tags = postTags.replaceAll("#", " #")
        .split(" ")
        .filter(x => x.length !== 0)
        .map(tag => { return { tag: tag } })
      const result = await AddTags(tags, auth.token);

      if (result?.code) {
        setErrorMessage("tag " + result.response.data.tag)
        sePosting(false);
        return;
      }


    }
    const body = {
      photo: postImg,
      description: postDes
    }
    if (tags !== null) body.tagList = tags;
    await AddPost(body, auth.token);
    setSuccessMessage("Post was shared! Redirecting to feed!");
    setErrorMessage("")
    sePosting(false);
    setTimeout(() => {
      navigate("/feed")
    }, 1000);
  }

  useEffect(() => {
    async function get() {
      const user = await GetUser(auth.token);
      setuser(user.data)
    }
    get();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Header />

      <AllAlignCenter>

        <Container>
          {errorMessage ? <Messages mesgError={errorMessage} /> : null}
          {successMessage ? <Messages mesgSuccess={successMessage} /> : null}
          <TitleCreate>Create Post</TitleCreate>
          <ContainerInfoUser>
            <ImageProfileUser src={user.profilePhoto} />
            <UserName>{user.username}</UserName>
          </ContainerInfoUser>
          <ContainerFormCreate>
            <InputCreate
              placeholder="Link photo"
              name="username"
              type="url"
              value={postImg}
              onChange={(e) => sePostImg(e.target.value)}
            ></InputCreate>
            <InputDescription
              placeholder="Write a caption..."
              name="des"
              type="text"
              value={postDes}
              onChange={(e) => setPostDes(e.target.value)}
            ></InputDescription>
            <InputCreate
              placeholder="#"
              name="email"
              type="text"
              value={postTags}
              onChange={(e) => sePostTags(e.target.value)}></InputCreate>
          </ContainerFormCreate>
          <ContainerButtonPost>
            {" "}
            <ButtonPost onClick={submit} disabled={posting}>{posting ? "Posting" : "Share"}</ButtonPost>

          </ContainerButtonPost>

        </Container>
      </AllAlignCenter>
    </>
  );
};

export default CreatePost;

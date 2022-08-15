import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
import ImageCR7 from "../../assets/profile.jpg";

const CreatePost = () => {
  return (
    <>
      <Header />
      <AllAlignCenter>
        <Container>
          <TitleCreate>Create Post</TitleCreate>
          <ContainerInfoUser>
            <ImageProfileUser src={ImageCR7} />
            <UserName>USERNAME</UserName>
          </ContainerInfoUser>
          <ContainerFormCreate>
            <InputCreate
              placeholder="Link photo"
              name="username"
              type="url"
            ></InputCreate>
            <InputDescription
              placeholder="Write a caption..."
              name="password"
              type="text"
            ></InputDescription>
            <InputCreate placeholder="#" name="email" type="text"></InputCreate>
          </ContainerFormCreate>
          <ContainerButtonPost>
            {" "}
            <ButtonPost>Share</ButtonPost>
          </ContainerButtonPost>
        </Container>
      </AllAlignCenter>
      <Footer />
    </>
  );
};

export default CreatePost;

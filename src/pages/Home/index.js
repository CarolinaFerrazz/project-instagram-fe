import {
  Container,
  TitleWelcome,
  ContainerHeader,
  LinkHome,
  LinksHeader,
  ContainerButtons,
  ButtonLogin,
  ButtonRegister,
} from "./styles";

const Home = () => {
  return (
    <>
      <ContainerHeader>
        <LinkHome title="Home Page" to="/">
          Fake Instagram
        </LinkHome>
        <ContainerButtons>
          <LinksHeader title="Login" href="/login">
            <ButtonLogin>Login</ButtonLogin>
          </LinksHeader>
          <LinksHeader title="Register" href="/register">
            <ButtonRegister>Register</ButtonRegister>
          </LinksHeader>
        </ContainerButtons>
      </ContainerHeader>
      <Container>
        <TitleWelcome>Welcome to Fake Instagram</TitleWelcome>
      </Container>
    </>
  );
};

export default Home;

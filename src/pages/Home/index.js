import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import {
  Container,
  IconHome,
  TitleWelcome,
  ContainerHeader,
  LinkHome,
  LinksHeader,
  ContainerButtons,
  ButtonLogin,
  ButtonRegister,
} from "./styles";
import Icon from "../../assets/icon.svg";

const Home = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth?.email ? (
        <Header />
      ) : (
        <ContainerHeader>
          <LinkHome title="Home Page" to="/">
            <IconHome alt="icon" src={Icon} />
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
      )}
      <Container>
        <TitleWelcome>Welcome to Fake Instagram</TitleWelcome>
      </Container>
    </>
  );
};

export default Home;

import {
  Container,
  LinkHome,
} from "./styles";

const LoginDiv = () => {
  return (
    <>
      <Container>
        <LinkHome title="Home Page" to="/">
          Fake Instagram
        </LinkHome>
      </Container>
    </>
  );
};

export default LoginDiv;
import { Container, TitleWelcome } from "./styles";
import Header from "../../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <TitleWelcome>Welcome to Fake Instagram</TitleWelcome>
      </Container>
    </>
  );
};

export default Home;

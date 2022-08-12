import {
  Container,
  FeedIcon,
  LinkHome,
  DirectIcon,
  ContainerIcons,
  LinksHeader
} from "./styles";
import IconDirect from "../../assets/direct.svg";
import IconFeed from "../../assets/feed.svg";
import IconProfile from "../../assets/profile.svg"

const LoginDiv = () => {
  return (
    <>
      <Container>
        <LinkHome title="Home Page" to="/login">
          Fake Instagram
        </LinkHome>
        <ContainerIcons>
          <LinksHeader title="Feed" href="/login">
            <FeedIcon src={IconFeed} alt="Feed icon"></FeedIcon>
          </LinksHeader>
          <LinksHeader title="Messages" href="/login">
            <DirectIcon src={IconDirect} alt="Messages icon"></DirectIcon>
          </LinksHeader>
          <LinksHeader title="Profile" href="/login">
            <DirectIcon src={IconProfile} alt="Profile icon"></DirectIcon>
          </LinksHeader>
        </ContainerIcons>
      </Container>
    </>
  );
};

export default LoginDiv;
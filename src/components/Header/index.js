// import { useNavigate } from "react-router-dom";
import {
  Container,
  ProfileIcon,
  FeedIcon,
  LinkHome,
  DirectIcon,
  ContainerIcons,
  LinksHeader
} from "./styles";
import IconDirect from "../../assets/direct.svg";
import IconFeed from "../../assets/feed.svg";
import IconProfile from "../../assets/profile.svg";

const Header = () => {
  return (
    <>
      <Container>
        <LinkHome title="Home Page" to="/feed">
          Fake Instagram
        </LinkHome>
        <ContainerIcons>
          <LinksHeader title="Feed" href="/feed">
            <FeedIcon src={IconFeed} alt="Feed icon"></FeedIcon>
          </LinksHeader>
          <LinksHeader title="Messages" href="/direct">
            <DirectIcon src={IconDirect} alt="Messages icon"></DirectIcon>
          </LinksHeader>
          <LinksHeader title="Profile" href="/profile">
            <ProfileIcon src={IconProfile} alt="Profile icon"></ProfileIcon>
          </LinksHeader>
        </ContainerIcons>
      </Container>
    </>
  );
};

export default Header;

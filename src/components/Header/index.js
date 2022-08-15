// import { useNavigate } from "react-router-dom";
import DropdownProfile from "../DropdownProfile";
import {
  Container,
  FeedIcon,
  LinkHome,
  DirectIcon,
  ContainerIcons,
  LinksHeader,
} from "./styles";
import IconDirect from "../../assets/direct.svg";
import IconFeed from "../../assets/feed.svg";

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
          <DropdownProfile />
        </ContainerIcons>
      </Container>
    </>
  );
};

export default Header;

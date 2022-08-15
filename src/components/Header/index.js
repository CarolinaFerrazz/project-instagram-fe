// import { useNavigate } from "react-router-dom";
import DropdownProfile from "../DropdownProfile";
import {
  Container,
  FeedIcon,
  ContainerHome,
  IconHome,
  LinkHome,
  DirectIcon,
  ContainerIcons,
  LinksHeader,
} from "./styles";
import IconDirect from "../../assets/direct.svg";
import IconFeed from "../../assets/feed.svg";
import Icon from "../../assets/icon.svg";

const Header = () => {
  return (
    <>
      <Container>
        <ContainerHome>
          <LinkHome title="Home Page" to="/feed">
            <IconHome alt="icon" src={Icon} />
            Fake Instagram
          </LinkHome>
        </ContainerHome>
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

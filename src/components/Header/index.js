import DropdownProfile from "../DropdownProfile";
import {
  Container,
  FeedIcon,
  ContainerHome,
  IconHome,
  LinkHome,
  IconSearchBar,
  DirectIcon,
  ContainerIcons,
  LinksHeader,
} from "./styles";
import IconDirect from "../../assets/direct.svg";
import IconFeed from "../../assets/feed.svg";
import Icon from "../../assets/icon.svg";
import IncoSearch from "../../assets/search.svg";

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
          <LinksHeader title="Search" href="/search">
            <IconSearchBar alt="icon" src={IncoSearch}></IconSearchBar>
          </LinksHeader>
          <LinksHeader title="Messages" href="/feed">
            <DirectIcon src={IconDirect} alt="Messages icon"></DirectIcon>
          </LinksHeader>
          <DropdownProfile />
        </ContainerIcons>
      </Container>
    </>
  );
};

export default Header;

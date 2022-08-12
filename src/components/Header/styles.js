import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.nav`
  margin: 0px 20px;
  padding: 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #404040;
`;

export const LinkHome = styled(Link)`
  padding: 8px 40px;
  margin: 8px;
  color: #d1d1d1;
  text-decoration: none;
  font-size: 28px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  margin: 20px 40px;
`;

export const DirectIcon = styled.img`
  margin-right: 30px;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const FeedIcon = styled.img`
  margin-right: 30px;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const LinksHeader = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

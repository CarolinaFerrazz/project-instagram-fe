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

export const IconHome = styled.img`
  margin-right: 8px;
  width: 28px;
`;

export const LinkHome = styled(Link)`
  padding: 8px 40px;
  margin: 8px;
  color: #d1d1d1;
  text-decoration: none;
  font-size: 28px;
  display: flex;
  align-items: center;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

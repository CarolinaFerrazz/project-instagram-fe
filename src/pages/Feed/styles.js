import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerIcon = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 80px;
  bottom: 0;
  position: fixed;
`;

export const ButtonAddPost = styled.button`
  background: none;
  border: none;
`;

export const IconAdd = styled.img`
  width: 50px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const LinkAddPost = styled(Link)`

`;

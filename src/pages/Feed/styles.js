import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin-top: 40px;
`;

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: right;
  right: 80px;
  flex-wrap: wrap;
  bottom: 8px;
  position: fixed;
  bottom: 20px;
`;

export const ButtonAddPost = styled.button`
  background: none;
  border: none;
`;

export const IconAdd = styled.img`
  width: 30px;
  border: 1px solid #fff;
  border-radius: 50%;
  padding: 8px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const LinkAddPost = styled(Link)``;

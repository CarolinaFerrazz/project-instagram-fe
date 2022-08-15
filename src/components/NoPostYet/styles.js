import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  flex-direction: column;
`;

export const ButtonAddPost = styled.button`
  border: none;
  background: none;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const IconNoPosts = styled.img`
  margin-bottom: 0;
  width: 80px;
`;

export const TitleNoPosts = styled.p`
  font-size: 24px;
  color: #d1d1d1;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const LinkButton = styled(Link)``;

export const TextCreatePost = styled.p`
  font-size: 16px;
  color: #d1d1d1;
  margin-top: 0;
`;

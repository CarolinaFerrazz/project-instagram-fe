import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 20px 8px;
  border: solid 1px #74b3ce;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

export const ContainerNameUser = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4px;
`;

export const ButtonUser = styled.button`
  background: none;
  border: none;
`;

export const LinkProfileUser = styled(Link)`

`

export const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const NameUser = styled.p`
  font-size: 20px;
  color: #74b3ce;
  padding-left: 8px;
  font-weight: 700;
`;

export const ImagePost = styled.img`
  max-width: 500px;
  min-height: 500px;
  margin-top: 4px;
  flex-wrap: wrap;
  border-top: solid 2px #74b3ce;
  border-bottom: solid 2px #74b3ce;
`;

export const ContainerLikes = styled.div`
  padding: 0 16px;
  display: flex;
  margin-bottom: 16px;
  margin-bottom: 4px;
  align-items: center;
`;

export const IconLike = styled.img`
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const NumberOfLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 0;
  font-weight: 700;
  margin-left: 8px;
`;

export const TextLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-left: 4px;
  font-weight: 700;
`;

export const DescriptionPost = styled.p`
  color: #c9c9c9;
  font-size: 16px;
  margin-top: 0;
  margin-left: 20px;
  margin-bottom: 4px;
`;

export const TimePost = styled.p`
  color: #b0b0b0;
  font-size: 10px;
  margin-top: 0;
  text-transform: uppercase;
  display: flex;
  justify-content: right;
  margin-right: 20px;
`;

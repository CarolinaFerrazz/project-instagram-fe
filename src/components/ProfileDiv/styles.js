import styled from "styled-components";
import { Link } from "react-router-dom";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 20px 8px;
  flex-wrap: wrap;
`;

export const UserName = styled.p`
  color: #74b3ce;
  font-size: 28px;
  margin-bottom: 24px;
  font-weight: 700;
`;

export const ContainerImageAndNumbers = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ImageProfile = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ContainerInfoNumbers = styled.div`
  padding: 8px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerNumberAndTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 24px;
`;

export const NumberInfoNumbers = styled.p`
  font-size: 24px;
  color: #fff;
  margin: 0;
`;

export const TitleInfoNumbers = styled.p`
  color: #d1d1d1;
  font-size: 22px;
  text-transform: uppercase;
  margin-top: 4px;
`;

export const NameProfile = styled.p`
  color: #fff;
  font-size: 24px;
  margin: 0;
  margin-top: 20px;
`;

export const DescriptionProfile = styled.p`
  color: #d1d1d1;
  font-size: 22px;
  margin: 0;
`;

export const ContainerButtonsProfile = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 32px;
`;

export const ButtonEditProfile = styled.button`
  padding: 8px 20px;
  min-width: 100%;
  background: #74b3ce;
  border-radius: 16px;
  color: #fff;
  border: none;

  &:hover {
    color: #fff;
    background: #85cdec;
  }
`;

export const LinksPages = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d1d1d1;
  text-decoration: none;

  &:hover {
    color: #ffff;
  }
`;

export const LinkEditProfile = styled(Link)`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-decoration: none;

  &:hover {
    font-weight: 700;
  }
`;

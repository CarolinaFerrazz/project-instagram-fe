import styled from "styled-components";
import { Link } from "react-router-dom";
import LINK from "../../services/Link";

export const AlignAllCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Container = styled.div`
  margin: 20px 8px;
  border: solid 1px #74B3CE;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
`;

export const ContainerNameUser = styled.div``;

export const NameUser = styled.p`
  font-size: 24px;
  color: #74B3CE;
  border-bottom: solid 1px #74B3CE;
  margin: 0;
  margin-top: 16px;
  padding-left: 20px;
  font-weight: 700;
`;

export const ImagePost = styled.img`
  max-width: 500px;
  margin-top: 4px;
  flex-wrap: wrap;
`;

export const ContainerIconsPost = styled.div`
  margin: 20px 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const IconLike = styled.img`
  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const IconComments = styled.img`
  margin-left: 20px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const IconSavePost = styled.img`
  max-width: 25px;

  &:hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.1);
  }
`;

export const ContainerLikes = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const NumberOfLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const TextLikes = styled.p`
  color: #fff;
  font-size: 18px;
  margin-top: 0;
  margin-bottom: 8px;
  margin-left: 4px;
  font-weight: 700;
`;

export const ContainerNameAndDescription = styled.div`
  display: flex;
  margin: 0 20px;
`;

export const NameUserPost = styled.p`
  color: #74B3CE;
  font-size: 16px;
  margin-top: 0;
  font-weight: 700;
`;

export const DescriptionPost = styled.p`
  color: #c9c9c9;
  font-size: 16px;
  margin-top: 0;
  margin-left: 8px;
`;

export const TimePost = styled.p`
  color: #b0b0b0;
  font-size: 12px;
  margin-top: 0;
  text-transform: uppercase;
  margin-left: 20px;
`;

export const HrComment = styled.hr`
  color: #74B3CE;
  width: 100%;
`;

export const ContainerNewCommentAndPublish = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ViewMoreInformation = styled(Link)`
  color: #b0b0b0;
  font-size: 16px;
  margin: 12px 0;
  margin-left: 20px;
  text-decoration: none;
`;

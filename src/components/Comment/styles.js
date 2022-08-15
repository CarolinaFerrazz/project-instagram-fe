import styled from "styled-components";

export const ContainerAllComents = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
`;

export const ContainerTimeAndLike = styled.div`
  display: flex;
  align-items: center;
`;

export const ContainerUserNameAndComment = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserNameComment = styled.p`
  color: #74b3ce;
  margin-bottom: 0;
`;

export const TextComment = styled.p`
  margin-left: 8px;
  margin-bottom: 0;
`;

export const TimeComment = styled.p`
  color: #b0b0b0;
  margin-top: 4px;
  display: flex;
  flex: 3;
`;

export const LikeComment = styled.img`
  width: 20px;
`;

export const NumberLikesComment = styled.p`
  margin-right: 8px;
  text-align: center;
`;

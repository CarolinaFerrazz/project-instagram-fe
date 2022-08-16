import styled from "styled-components";

export const ContainerAllComents = styled.div`
  margin: 0px 20px;
  display: flex;
  flex-direction: column;
  min-width: 90%;
  max-height: fit-content;
`;

export const ContainerTimeAndLike = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
`;

export const ContainerUserNameAndComment = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const ContainerComment = styled.div`
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  display: flex;
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
  margin-top: 0;
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

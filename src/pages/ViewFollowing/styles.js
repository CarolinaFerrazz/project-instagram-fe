import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 140px;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 16px;
  background-color: #303030;
  margin: 40px 0px;
  padding: 20px 20px;
  min-width: 40%;
  display: flex;
  flex-direction: column;
`;

export const TitleFollowing = styled.p`
  color: #8d8d8d;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  margin-bottom: 0px;
`;

export const TextNumberFollowers = styled.p`
  color: #8d8d8d;
  font-size: 18px;
  text-align: center;
  margin-top: 0;
`;

export const ImageAndNames = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  max-height: 100px;
  max-width: 100px;
`;

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

export const UserName = styled.p`
  font-size: 16px;
  margin-bottom: 0;
  color: #74b3ce;
`;

export const NameProfile = styled.p`
  margin-top: 0;
  font-weight: 700;
`;

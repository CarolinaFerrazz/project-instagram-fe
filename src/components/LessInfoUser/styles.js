import styled from "styled-components";

export const ContainerNames = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
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
  min-height: 100px;
  min-width: 100px;
  object-fit: cover;
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

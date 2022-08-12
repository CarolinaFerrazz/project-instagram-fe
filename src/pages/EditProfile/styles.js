import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0%;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0;
  min-width: 40%;
  background-color: #303030;
  padding: 20px 100px;
  border-radius: 16px;
`;

export const ContainerPictureAndName = styled.div`
  display: flex;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

export const ContainerTextUserAndPicture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
`;

export const TextUserName = styled.p`
  color: #ffff;
  font-size: 24px;
  font-weight: 700px;

  margin-bottom: 0;
`;

export const TextChangePicture = styled.p`
  margin-top: 0;
`;

export const ContainerFormEditProfile = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 20px;
  flex-direction: column;
`;

export const LabelChangeName = styled.label`
  color: #d1d1d1;
  font-size: 20px;
`;

export const LabelChangeBio = styled.label`
  color: #d1d1d1;
  font-size: 20px;
`;

export const InputChangeName = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  margin-left: 8px;
  min-width: 86%;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const InputChangeBio = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  min-height: 120px;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const TextAboutChangeName = styled.p`
  color: #8d8d8d;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonConfirm = styled.button`
  color: #8d8d8d;
  margin-top: 8px;
  padding: 8px 34px;
  background: #363636;
  border-radius: 16px;
  font-size: 16px;
  border: none;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
    color: #fff;
  }
`;

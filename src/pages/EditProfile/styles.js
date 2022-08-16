import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0%;
  flex-wrap: wrap;
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
  min-width: 120px;
  max-width: 120px;
  min-height: 120px;
  max-height: 120px;
  object-fit: cover;
`;

export const ContainerTextUserAndPicture = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`;

export const TextUserName = styled.p`
  color: #74b3ce;
  font-size: 24px;
  font-weight: 700px;
  margin-bottom: 0;
`;

export const TextChangePicture = styled.p`
  margin: 0;
  margin-bottom: 8px;
  font-size: 16px;
`;

export const InputChangePicture = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.3));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  font-size: 16px;
  min-width: 80%;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const ContainerFormEditProfile = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 20px;
  flex-direction: column;
`;

export const LabelChangeName = styled.label`
  color: #d1d1d1;
  font-size: 18px;
  margin-bottom: 4px;
`;

export const LabelChangeBio = styled.label`
  color: #d1d1d1;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 4px;
`;

export const InputChangeName = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 8px;
  color: #8d8d8d;
  background: #363636;
  min-width: 86%;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const InputChangeBio = styled.textarea`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 8px;
  color: #8d8d8d;
  background: #363636;
  min-height: 120px;
  resize: none;

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
  color: #fff;
  margin-top: 8px;
  padding: 8px 34px;
  background: #74b3ce;
  border-radius: 16px;
  font-size: 16px;
  border: none;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
    font-weight: 700;
  }
`;

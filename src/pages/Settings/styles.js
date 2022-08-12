import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 140px;
`;

export const Container = styled.div`
  border-radius: 16px;
  background-color: #303030;
  margin: 40px 0px;
  padding: 20px 100px;
  min-width: 40%;
`;

export const TitleInstagram = styled.p`
  color: #d1d1d1;
  font-size: 40px;
  margin-bottom: 8px;
  text-align: center;
`;

export const TitleSettings = styled.p`
  color: #8d8d8d;
  font-size: 24px;
  margin-top: 0;
  text-transform: uppercase;
  text-align: center;
`;

export const ContainerFormSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

export const InputSettings = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  border-radius: 16px;

  &::placeholder {
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const ContainerButtonConfirm = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 80px;
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
  }
`;

export const LinkBack = styled.a`
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

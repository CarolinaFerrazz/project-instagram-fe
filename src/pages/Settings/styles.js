import styled from "styled-components";

export const AllAlignCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #282828;
  min-width: 70%;
  margin-top: 100px;
  border-radius: 16px;
`;

export const TitleInstagram = styled.p`
  color: #d1d1d1;
  font-size: 40px;
  margin-bottom: 8px;
`;

export const TitleSettings = styled.p`
  color: #8d8d8d;
  font-size: 24px;
  margin-top: 0;
  text-transform: uppercase;
`;

export const ContainerFormSettings = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const InputSettings = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 16px;
  padding: 8px 16px;
  color: #8d8d8d;
  background: #363636;
  border-radius: 16px;
  min-width: 800px;

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

import styled from "styled-components";

export const ContainerRegister = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0; 
`;

export const Container = styled.div`
  border-radius: 16px;
  background-color: #303030;
  margin: 40px 0px;
  padding: 20px 100px;
  min-width: 40%;
`;

export const TitleRegister = styled.p`
  font-size: 40px;
  color: #d1d1d1;
  text-align: center;
`;

export const TextRegister = styled.p`
  font-size: 22px;
  color: #8d8d8d;
  text-align: center;
`;

export const ContainerFormRegister = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;
`;

export const InputRegister = styled.input`
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.2));
  border: none;
  margin-bottom: 10px;
  outline: none;
  box-sizing: border-box;
  font-size: 18px;
  padding: 8px 16px;
  color: #fff;
  background: #363636;
  border-radius: 16px;

  &::placeholder {
    opacity: 100%;
    color: #8d8d8d;
    justify-content: center;
  }
`;

export const ContainerButtonRegister = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonRegister = styled.button`
  color: #fff;
  margin-top: 8px;
  padding: 8px 34px;
  background: #508991;
  border-radius: 16px;
  font-size: 16px;
  border: none;

  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.1);
    font-weight: 700;
  }
`;

export const ContainerTextAboutRegister = styled.div`
  margin-top: 24px;
`;

export const TextAboutRegister = styled.p`
  color: #8d8d8d;
  text-align: center;
  font-size: 14px;
`;

export const ContainerButtonLogin = styled.div`
  border-radius: 16px;
  background-color: #303030;
  padding: 20px 100px;
  min-width: 44%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLogin = styled.a`
  color: #8d8d8d;
  font-size: 20px;
  padding: 0;
`;

export const ButtonLogin = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  padding-left: 8px;
`;

export const LinkLogin = styled.a`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #508991;
  text-decoration: none;

  &:hover {
    color: #ffff;
  }
`;

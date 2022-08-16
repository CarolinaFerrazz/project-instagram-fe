import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px #404040 solid;
  padding: 4px 0;
  outline: none;
  width: 90%;
  color: #74b3ce;
  font-size: 20px;
  background: none;

  &::placeholder {
    color: #74b3ce;
  }
`;

export const Icon = styled.img`
  width: 26px;
  margin-right: 8px;
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

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
  color: #fff;
  font-size: 16px;
  background: none;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

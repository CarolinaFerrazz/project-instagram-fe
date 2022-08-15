import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

export const IconSearchBar = styled.img`
  width: 25px;
  margin-right: 8px;
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const LinkSearch = styled(Link)``;

import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover {
    display: block;
  }
`;

export const ButtonDropDown = styled.button`
  padding: 16px;
  font-size: 16px;
  border: none;
`;

export const ProfileIcon = styled.img`
  &:hover {
    -webkit-transform: scale(1.4);
    transform: scale(1.3);
  }
`;

export const ContainerLinksMenu = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  &:hover {
    background-color: #3ed;
  }
`;

export const LinksMenu = styled.a`
  color: #ffff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-transform: uppercase;
`;
